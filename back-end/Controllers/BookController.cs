using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;


[ApiController]
[Route("books")]
public class BookController : ControllerBase
{
    private readonly IRepository<Book> _bookRepository;

    public BookController(IRepository<Book> bookRepository)
    {
        _bookRepository = bookRepository;
    }

    [HttpGet]
    public async Task<IEnumerable<Book>> GetAll()
    {
        return await _bookRepository.GetAll();
    }


    [HttpGet("{id}")]
    public async Task<IActionResult> Get(long id)
    {
        try
        {
            var result = await _bookRepository.Get(id);
            return Ok(result);
        }
        catch (Exception)
        {
            return NotFound($"No book with id {id} found!");
        }

    }


    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(long id)
    {
        try
        {
           await _bookRepository.Delete(id);
           return Ok();
        }
        catch(Exception)
        {
           return NotFound();
        }


    }


    [HttpPut("{id}")]
    public async Task<IActionResult> Update(long id, [FromBody] Book book)
    {
        try
        {
            var updatedBook = await _bookRepository.Update(new Book { Id = id, Title = book.Title, Author = book.Author });
            return Ok(updatedBook);
        }
        catch (Exception)
        {
            return BadRequest();
        }
    }

    [HttpPost]
    public async Task<IActionResult> Insert([FromBody] Book book)
    {
        try
        {
            var newBook = await _bookRepository.Insert(book);
            return Created($"/books/{book.Id}", newBook);
        }
        catch (Exception)
        {
            return BadRequest();
        }
    }
}

