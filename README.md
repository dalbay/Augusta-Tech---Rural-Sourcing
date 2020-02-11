# Augusta-Tech---Rural-Sourcing

**Database Diagram**  
![Database Desigin](/images/db_design.png)

(updated files in .net core - angular project need to be replaced!)
---  

#### Angular, ASP.NET Core Web API & SQL Server Quickly

1.	Create a New VS project
2.	Create Database Table (optional)
3.	Create Model and DbContext
4.	Create a Controller (from the model and dbContext)
5.	Convert the DbContext into a Service so that we can Inject it as a Dependency into our Controller
6.	Create a new Angular Project (ng new) – as a separate Project !
7.	Make a Web API Request
8.	Use CORS to fix the Web API Request error
9.	Use HttpClient instead of HttpModule

	After creating the database open SQL Server Object Explorer; You can modify the data by - right click the table and View Data.


	From that table generate a model and dbContext - we can do this by using the build in console: Tools - NuGet Manager - Package Manager Console.


scaffold -""(connection string)- Micros...(sql server driver),- we want the result in a Models folder which we don't have  yet

```PM> scaffold-dbcontext "Data Source=DESKTOP-AYGUN;Initial Catalog=RuralSourcing_HRdb;Integrated Security=True;" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models```  

