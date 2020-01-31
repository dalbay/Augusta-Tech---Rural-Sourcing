using Augusta_Tech___Rural_Sourcing.Data;
using Microsoft.AspNetCore.Mvc;

namespace Augusta_Tech___Rural_Sourcing.Controllers
{
    [Route("api/[controller]")]
    public class BooksController: Controller
    {
        private IBookService _service;
        public BooksController(IBookService service)
        {
            _service = service;
        }

        //Create/Add a new book
        [HttpPost("AddBook")]
        public IActionResult AddBook([FromBody]Book book)
        {
            _service.AddBook(book);
            return Ok("Added");
        }
    }
}