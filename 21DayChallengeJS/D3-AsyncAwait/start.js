(() => {
    // //asynchronousคือโค้ดที่ถูกเรียกใช้ก่อนแต่อาจจะเสร็จที่หลัง
    // function simulateAcyncAPI(text,timeout){ //จำลองการเรียกโค้ดแบบasynchronous
    //     setTimeout(()=> console.log(text),timeout); //เรียกใช้งานหลังเวลาtimeoutที่กำหนด
    // } 
    // simulateAcyncAPI('A',1000);
    // simulateAcyncAPI('B',500);
    // simulateAcyncAPI('C',100); จะทำงานก่อน

    // //callback
    // function simulateAcyncAPI(text, timeout, callback) {
    //     setTimeout(() => {
    //         console.log(text)
    //         if (callback) {
    //             callback(); //เรียกใช้เมื่อการทำงานของ asynchronousจบ
    //         }

    //     }, timeout);
    // }
    // //ถ้าต้องใส่หลายๆอันจะทำยังไง?
    // simulateAcyncAPI('A', 1000, () => {
    //     simulateAcyncAPI('B', 500, () => {
    //         simulateAcyncAPI('C', 100);
    //     });
    // });

    // //promise
    // function simulateAcyncAPI(text, timeout){
    //     return new Promise((resolve,reject)=>{//สร้างpromise obj
    //         setTimeout(()=>{
    //             if(text==='B') return reject('B got rejected'); //ข้อความของerror
    //             console.log(text);
    //             resolve(); //เป็นการบอกpromiseว่าการทำงานของ asynchronous code เสร็จแล้ว
    //         },timeout);
    //     });
    // }

    // simulateAcyncAPI('A',1000)
    // .then(()=>{ //จะเรียกใช้เมื่อฟังก์ชันของเราทำงานเสร็จแล้วเรียกใช้ resolve
    //    return simulateAcyncAPI('B',500);
    // })
    // .then(()=>{
    //     return simulateAcyncAPI('C', 100);
    // })
    // .catch((error)=>{ //เรียกใช้เมื่อเกิดerrorขึ้น
    //     console.error(error);
    // })

    //Async,Await

    function simulateAcyncAPI(text, timeout) {
        return new Promise((resolve, reject) => {//สร้างpromise obj
            setTimeout(() => {
               if (text === 'B') return reject('B got rejected'); //ข้อความของerror
                console.log(text);
                resolve(); //เป็นการบอกpromiseว่าการทำงานของ asynchronous code เสร็จแล้ว
            }, timeout);
        });
    }

    async function run() {
        try {
            await simulateAcyncAPI('A', 1000);
            await simulateAcyncAPI('B', 500);
            await simulateAcyncAPI('C', 100);
        }catch(error){
            console.error(error);
        }
}
run();
})();