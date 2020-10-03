ONLINE EXAMINATION PORTAL – TEAM 20
-	Student Registration: After entering personal details along with degree, branch and year, courses for that particular branch are received. Then the student can select the desired courses and generate a registration request.

The registration request is received by the Faculty Advisor. If the faculty advisor accepts the request, an automated email (using SendGrid) is sent to the student which contains the username and the temporary password. 

On first login, the registration Boolean is still false and thus it triggers to set new password. Once the new password is set, the registration Boolean turns true.
Status: Backend complete, frontend static pages only

-	Faculty and Faculty Advisor Registration: Both the faculty advisor and faculty are having different roles. The faculty advisor can accept the registration request while the faculty can create new courses and create tests inside them.
Status: Backend complete, frontend static pages only
-	Test Portal: All 7 types of questions have been taken care of in the schema of the examination paper. The test portal front end is working properly where you can navigate between questions easily. 
Status: Backend complete (except pdf uploading), frontend complete, integration remaining

Overall status: Backend is pretty close to complete with almost all the required functionality mentioned in the problem statement. In frontend, mostly static pages have been made, some of them have state management and have been made dynamic using React. Routing for frontend is incomplete.
MongoDB database dump can be accessed using MongoDB Compass, contact Manthan if you want the MongoDB URL. 

