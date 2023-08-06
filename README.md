# 65130604_CT519_nontapat-khieorat
แอปพลิเคชันนี้เป็นแอปพลิเคชันเว็บที่ใช้ Node.js และ Express.js เป็นเฟรมเวิร์กในการสร้างและจัดการเว็บเซิร์ฟเวอร์ เป้าหมายหลักของแอปพลิเคชันนี้คือให้บริการ APIs สำหรับการเก็บและดึงข้อมูลของเป้าหมายที่ผู้ใช้ตั้งไว้ ซึ่งเก็บข้อมูลเหล่านี้ในฐานข้อมูล MongoDB และใช้ Mongoose เป็น ODM ในการจัดการกับข้อมูล MongoDB ในรูปแบบของอ็อบเจ็กต์ในภาษา JavaScript

ขั้นตอนการทำงานของแอปพลิเคชันประกอบด้วย:
1.ก่อนที่แอปพลิเคชันจะเริ่มต้นให้ทำการกำหนดค่าต่างๆ ของ Express.js เช่น bodyParser เพื่อให้แปลงข้อมูลจาก JSON เป็น Object ใน request body, morgan เพื่อบันทึก access log ลงในไฟล์, และการตั้งค่า Cross-Origin Resource Sharing (CORS) เพื่ออนุญาตให้แอปพลิเคชันสามารถรับส่ง request จากโดเมนอื่นได้
2.สร้าง endpoints สำหรับการดึงข้อมูลของเป้าหมายทั้งหมด (GET /goals), เพิ่มเป้าหมายใหม่ (POST /goals), และลบเป้าหมาย (DELETE /goals/:id) ที่ให้ผู้ใช้ทำการเรียกใช้งาน
3.ใน endpoint ดึงข้อมูลเป้าหมายทั้งหมด (GET /goals) แอปพลิเคชันจะทำการค้นหาข้อมูลทั้งหมดจากฐานข้อมูล MongoDB และส่งคืนข้อมูลในรูปแบบของ JSON กลับไปยังผู้ใช้
4.ใน endpoint เพิ่มเป้าหมายใหม่ (POST /goals) แอปพลิเคชันจะรับข้อมูลจาก request body เก็บเป้าหมายใหม่ลงในฐานข้อมูล MongoDB และส่งคืนข้อมูลเป้าหมายที่ถูกเพิ่มลงในฐานข้อมูลในรูปแบบ JSON กลับไปยังผู้ใช้
5.ใน endpoint ลบเป้าหมาย (DELETE /goals/:id) แอปพลิเคชันจะค้นหาเป้าหมายตาม ID ที่ระบุใน request parameter จากนั้นทำการลบข้อมูลเป้าหมายนั้นออกจากฐานข้อมูล MongoDB และส่งคืนข้อความยืนยันการลบเป้าหมายกลับไปยังผู้ใช้
6.เพื่อที่จะใช้งานกับฐานข้อมูล MongoDB แอปพลิเคชันจำเป็นต้องเชื่อมต่อกับ MongoDB โดยใช้ Mongoose ในการกำหนด URL การเชื่อมต่อ และเชื่อมต่อฐานข้อมูล หากการเชื่อมต่อไม่สำเร็จจะแสดงข้อความผิดพลาด แต่ถ้าสำเร็จแอปพลิเคชันจะทำงานที่พอร์ต 80
ทว่าทั้งนี้ แอปพลิเคชันนี้ยังคงให้บริการ APIs เพื่อเก็บและดึงข้อมูลเป้าหมายที่ผู้ใช้ตั้งไว้ผ่าน endpoints ที่กำหนดไว้ในแอปพลิเคชัน ซึ่งผู้ใช้สามารถดึงข้อมูลทั้งหมด และทำการเพิ่มและลบข้อมูลเป้าหมายได้ตามต้องการ
โค้ดข้างต้นเป็นแอปพลิเคชันเว็บของ Node.js ที่ใช้ Express.js เป็นเฟรมเวิร์กในการสร้างและจัดการเว็บเซิร์ฟเวอร์ โดยมีการให้บริการ APIs สำหรับการเก็บและดึงข้อมูลของเป้าหมายที่ผู้ใช้ตั้งไว้ ซึ่งใช้ MongoDB เป็นฐานข้อมูลเพื่อเก็บข้อมูลทั้งหมด การเข้าถึงฐานข้อมูล MongoDB ใช้ Mongoose เป็น ODM (Object Data Mapping) เพื่อเป็นตัวกลางในการจัดการข้อมูล MongoDB ในรูปแบบของอ็อบเจ็กต์ในภาษา JavaScript

ขั้นตอนการทำงานของแอปพลิเคชันได้แก่การกำหนดค่าต่าง ๆ ของ Express.js เช่น bodyParser เพื่อแปลงข้อมูลจาก JSON เป็น Object ใน request body, morgan เพื่อบันทึก access log ลงในไฟล์, และการตั้งค่า Cross-Origin Resource Sharing (CORS) เพื่ออนุญาตให้แอปพลิเคชันรับส่ง request จากโดเมนอื่นได้
ต่อมาจะสร้าง endpoints สำหรับการดึงข้อมูลของเป้าหมายทั้งหมด (GET /goals), เพิ่มเป้าหมายใหม่ (POST /goals), และลบเป้าหมาย (DELETE /goals/:id) โดยเมื่อใช้งาน endpoint ดึงข้อมูลเป้าหมายทั้งหมด แอปพลิเคชันจะค้นหาข้อมูลทั้งหมดจากฐานข้อมูล MongoDB และส่งคืนข้อมูลในรูปแบบ JSON กลับไปยังผู้ใช้ ในขณะที่ใช้งาน 
endpoint เพิ่มเป้าหมายใหม่ แอปพลิเคชันจะรับข้อมูลจาก request body เก็บเป้าหมายใหม่ลงในฐานข้อมูล MongoDB และส่งคืนข้อมูลเป้าหมายที่ถูกเพิ่มลงในฐานข้อมูลในรูปแบบ JSON กลับไปยังผู้ใช้ ส่วนการใช้งาน endpoint ลบเป้าหมาย แอปพลิเคชันจะค้นหาเป้าหมายตาม ID ที่ระบุใน request parameter จากนั้นทำการลบข้อมูลเป้าหมายนั้นออกจากฐานข้อมูล 
MongoDB และส่งคืนข้อความยืนยันการลบเป้าหมายกลับไปยังผู้ใช้
ขั้นตอนสุดท้ายคือการเชื่อมต่อกับ MongoDB โดยใช้ Mongoose เพื่อกำหนด URL การเชื่อมต่อและเชื่อมต่อฐานข้อมูล MongoDB หากการเชื่อมต่อไม่สำเร็จจะแสดงข้อความผิดพลาด แต่ถ้าสำเร็จแอปพลิเคชันจะทำงานที่พอร์ต 80
แสดงผลข้อมูลและ Component ที่สร้างไว้ โดยในกรณีที่กำลังโหลดข้อมูลแอปพลิเคชันจะแสดง Spinner (ตัวหมุน) ในระหว่างที่รอข้อมูลดาต้ามาแสดง การทำงานใน Concurrent Mode ช่วยให้แอปพลิเคชันแสดงผลข้อมูลได้ไว
และตอบสนองกับผู้ใช้งานได้ดีขึ้น ทำให้การใช้งานแอปพลิเคชันเป็นไปได้ด้วยความรวดเร็ว และมีประสิทธิภาพเมื่อมีผู้ใช้งานหลายคนใช้งานพร้อมกัน
ขั้นตอนที่ 4 เป็นการเตรียมการในการ Deploy แอปพลิเคชันเว็บ (Web Application) โดยใช้ AWS EC2 โดยทำดังนี้:

ติดตั้ง Docker Engine และ Docker Compose ใน AWS EC2 เพื่อใช้ในการทำงานและจัดการ Docker containers โดยใช้คำสั่งเหมือนกับตอนติดตั้งบนเครื่อง local:

sql
Copy code
sudo apt-get update
sudo apt-get install docker.io
sudo apt-get install docker-compose
เตรียม git เพื่อให้สามารถ clone repository ของเว็บแอปพลิเคชันมาทำงานใน AWS EC2:

arduino
Copy code
sudo apt-get install git
สร้าง repositories "ct519-Myhobbies" ใน Github เพื่อใช้เก็บโค้ดของเว็บแอปพลิเคชัน โดยใช้หน้าเว็บของ Github หรือคำสั่งผ่าน command line:

csharp
Copy code
git init
git remote add origin https://github.com/your-username/ct519-Mybooks.git
อัปโหลดโค้ดที่ได้ออกแบบและเขียนขึ้นใน Github repository "ct519-Mybooks":

sql
Copy code
git add .
git commit -m "Initial commit"
git push -u origin master
สร้างเครื่อง EC2 ใน AWS และติดตั้ง Docker Engine ตามขั้นตอนที่ 1:

เข้าสู่ AWS Management Console
ไปที่หน้า EC2 Dashboard
คลิกปุ่ม "Launch Instance" เพื่อสร้าง EC2 instance
เลือก AMI (Amazon Machine Image) ที่ต้องการใช้ (ตัวอย่างเช่น Ubuntu)
เลือกขนาดของ instance ที่ต้องการ (ตามความเหมาะสมของโปรเจค)
เพิ่ม Storage, Tags, Security Groups, และกำหนด Key Pair ตามความเหมาะสม
ตรวจสอบข้อมูลและกด "Launch" เพื่อสร้าง instance
ทำการ download key pair ที่ใช้ในการเข้า SSH เข้าไปยัง instance
เมื่อ instance สร้างเสร็จสิ้น ให้เริ่ม SSH เข้าไปยัง instance โดยใช้ key pair ที่ได้ดาวน์โหลดมา
เมื่อเข้าสู่ instance ด้วย SSH ให้ทำการติดตั้ง Docker Engine ตามขั้นตอนที่ 1 ด้วยคำสั่ง:

sql
Copy code
sudo apt-get update
sudo apt-get install docker.io
เมื่อติดตั้ง Docker Engine เสร็จสิ้น ให้ทำการติดตั้ง Docker Compose ด้วยคำสั่ง:

arduino
Copy code
sudo apt-get install docker-compose
ใน command line ของ instance ให้ clone repository "ct519-Mybooks" มาที่เครื่อง EC2:

bash
Copy code
git clone https://github.com/your-username/ct519-Mybooks.git
เข้าไปในโฟลเดอร์ "ct519-Myhobbies" และกำหนดสิทธิ์ให้ทุกไฟล์และโฟลเดอร์ในโปรเจค:

bash
Copy code
cd ct519-Myhobbies
chmod -R 777 .    # กำหนดสิทธิ์ให้ทุกไฟล์และโฟลเดอร์ในโปรเจค
ใช้ Docker Compose เพื่อสร้างและเริ่มต้นการทำงานของเว็บแอปพลิเคชัน:

css
Copy code
docker-compose up --build
เมื่อต้องการหยุดการทำงานของเว็บแอปพลิเคชัน ให้ใช้คำสั่ง:

javascript
Copy code
sudo docker stop $(sudo docker ps -aq)
sudo docker rm $(sudo docker ps -aq)
หมายเหตุ: ขั้นตอนที่ 10-11 เป็นขั้นตอนเพิ่มเติมเพื่อควบคุมการทำงานของ Docker containers ในกรณีที่ต้องการหยุดการทำงานหรือเริ่มต้นใหม่
ขั้นตอนนี้จำเป็นในกรณีที่ต้องการทำการ Deploy และอัปเดตแอปพลิเคชันใหม่ในอนาคต โดยควรทำการรัน Docker containers ด้วยคำสั่งที่เหมาะสมกับสถานะที่ต้องการ เช่น docker-compose down 
