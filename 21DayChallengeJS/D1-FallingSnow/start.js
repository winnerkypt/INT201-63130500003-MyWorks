(() => {
    function setup() {
        const canvas = document.getElementById('falling-snow-canvas') //ดึงค่าcanvasมา
        canvas.width = window.innerWidth //เซ็ตความกว้างให้เป็นค่าความกว้างของวินโดว
        canvas.height = window.innerHeight
        //return obj
        return {
            canvas, //เป็นObjที่ใช้เซ้ตค่าว่าจะมีความกว้างและความสูงเท่าไหร่
            canvasContext: canvas.getContext('2d'), //วาดรูปออกมา
            numberOfSnowBalls: 250 //กำหนดจำนวนหิมะ
        }
    }
    function random(min, max) { //randomค่าเพื่อไม่ให้พิกัดx,yตรงกัน
        return Math.floor(Math.random() * (max - min + 1)) + min; //math.randomจะreturn0-0.99
    }
    function createSnowBalls(canvas, numberOfSnowBalls) {
        //สร้างอาเรย์โดยใช้space syntax
        return [...Array(numberOfSnowBalls)].map(() => { //ทำให้ทุกindexมีพิกัดเป็นxและy
            return {
                x: random(0, canvas.width), //randomค่าตั้งแต่0จนถึงสุดขอบวินโดว 
                y: random(0, canvas.height),
                //random ความโปร่งแสงกับขนาด
                opacity: random(0.5, 1),
                radius: random(2, 4),
                //ramdom พิกัดการเคลื่อนที่
                speedX:random(-5,5), //random ซ้ายขวา
                speedY: random(1,3) //ความเร็วในการเลื่อนลง
            }
        });

    }
    function drawSnowball(canvasContext, snowBall) {
        canvasContext.beginPath(); //บอกว่ากำลังจะเริ่มวาด
        //ความใหญ่ของหิมะ //องศาเริ่มกับจบโดยจบจะเป็นสองพาย
        canvasContext.arc(snowBall.x, snowBall.y, snowBall.radius, 0, Math.PI * 2); //ฟังก์ชันในการวาดรูปวงกลม
        canvasContext.fillStyle = `rgba(255,255,255,${snowBall.opacity})`;//เซ็ตค่าสีของลูกบอล
        canvasContext.fill(); //เติมสี
    }
    function moveSnowBall(canvas,snowBall){ //การเคลื่อนที่ของแต่ละลูก
        snowBall.x+=snowBall.speedX; 
        snowBall.y+=snowBall.speedY;

        if(snowBall.x>canvas.width){
            //ถ้าเลื่อนไปจนตกขอบขวา ให้เซ็ตpositionเป็นขอบซ้าย
            snowBall.x=0;
        }else if(snowBall.x<0){
            //ถ้าเลื่อนไปจนตกขอบซ้าย ใหเซ็ตpositionเป็นขอบขวา
            snowBall.x=canvas.width;
        }

        //ถ้าเลื่อนไปจนตกขอบล่าง ให้เซ็ตpositionเป็นขอบบน
        if(snowBall.y>canvas.height){
            snowBall.y=0;
        }
    }
    function run() {
        const { canvas, canvasContext, numberOfSnowBalls } = setup();
        const snowBalls = createSnowBalls(canvas, numberOfSnowBalls);
        
        
        setInterval(()=>{ //วนซ้ำไปเรื่อยๆ
            canvasContext.clearRect(0,0,canvas.width,canvas.height) //ทำการเคลียร์พิกัดเดิมก่อนการวนลูปในทุกๆรูปไม่งั้นจะเห็นเป็นเส้น
            snowBalls.forEach((snowBall) => drawSnowball(canvasContext, snowBall));
            snowBalls.forEach((snowBall) => moveSnowBall(canvas,snowBall));
        },50) //ทำการวาดลูบอลทุกๆ50millisec
    }
    run();
})();