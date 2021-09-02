(() => {
    function run() {
        const bodyElem = document.querySelector('body');//ดึงelementตัวbody
        const eyeElems = document.querySelectorAll('.eye');//ดึงelementของตา โดยใส่class eye

        function onMouseMove({ pageX, pageY }) {
            //คำนวณจากด้านซ้ายบนไปถึงลูกตาด้านซ้ายบน
            eyeElems.forEach((eyeElem) => {
                const { left, top } = eyeElem.getBoundingClientRect(); //คำนวณพิกัดของตาว่าอยู่ตรงไหนของหน้าจอ
                //คำนวณจุดศูนย์กลางของดวงตา
                const eyeCenterX = left + eyeElem.offsetWidth / 2;
                //ความกว้างของดวงตา
                const eyeCenterY = top + eyeElem.offsetHeight / 2;
                const radian =Math.atan2(pageX-eyeCenterX,pageY-eyeCenterY); //ความต่างของเม้าส์กับจุดศูนย์กลาง
                const angle=radian*180/Math.PI*-1 //คูณ-1เพื่อบอกว่าตำแหน่งของตาอยู่ด้านล่างไม่ใช่ด้านบน //หาองศา
                eyeElem.style.transform=`rotate(${angle}deg)`
            });
        }
        bodyElem.addEventListener('mousemove', onMouseMove);
    }
    run();
})();