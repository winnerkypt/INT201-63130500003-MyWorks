(()=>{
    const canvas=document.getElementById('painting'); //ดึงแคนวาสมา
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const context=canvas.getContext('2d');
    let previousPoint={x:0,y:0}; //เซตให้อยู่ซ้ายบนของแคนวาส
    
    function getDistance(previousPoint,currentPoint){//ทำเพื่อจะได้มีความเบาหนักของพู่กัน
        return Math.sqrt((previousPoint.x-currentPoint.x)**2+(previousPoint.y-currentPoint.y)**2);
    }

    function onMouseMove({pageX,pageY}){
        const currentPoint={x:pageX,y:pageY};
        context.beginPath(); //บอกcontextว่าจะเริ่มวาด

        context.lineCap='round'; //setพู่กันให้เป็นวงกลม ปกติจุดจบจะเป็นสี่เหลี่ยม
        context.lineJoin='round';//ปกติถ้าวาดเส้นสองเส้นตุดตัดกันจะเป็นสี่เหลี่ยม แต่อันนี้เซ้ตให้เป็นวงกลม
        
        const distance = getDistance(previousPoint,currentPoint);
        context.lineWidth=Math.random()/distance*40;//เซ้ตความกว้าง
        const opacity=Math.min(0.5, 1/distance);//เซ็ตค่าความโปรงแสงมากสุดให้เป็น0.5
        context.strokeStyle =`rgba(222, 10, 109, ${opacity})`;//เซ้ตสีของพู่กัน

        context.moveTo(previousPoint.x,previousPoint.y);//จุดเริ่มต้นที่จะวาด
        context.lineTo(currentPoint.x,currentPoint.y);//จุดที่เม้าอยู่ปัจจุบัน

        context.stroke();//เริ่มวาดเส้น
        context.closePath();//จบตรงนี้

        previousPoint=currentPoint;
    }

    function onMouseEnter({pageX,pageY}){
        previousPoint.x=pageX;
        previousPoint.y=pageY;
    }

    function run(){
        canvas.addEventListener('mousemove',onMouseMove);
        canvas.addEventListener('mouseenter',onMouseEnter);//จะเกิดขึ้นเมื่อเราเอาเม้าเข้าไป
    }
    run();
})();