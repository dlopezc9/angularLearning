using BookApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace BookApi.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private Book[] _books = new Book[]
        {
            new Book{ Id = 1, Author = "Crepe", Title = "SuperBook Pt1"},
            new Book{ Id = 1, Author = "Crepe", Title = "SuperBook Pt2"},
            new Book{ Id = 1, Author = "Crepe", Title = "SuperBook Pt3"},
        };

        [HttpGet]
        [Route("getAll")]
        public ActionResult<IEnumerable<Book>> GetBooks()
        { 
            return Ok(_books); 
        }
    }
}
