using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace back_end.Controllers
{
    [ApiController]
    [Route("[controller]s")]
    public class MovieController : ControllerBase
    {
    private readonly IRepository<Movie> _movieRepository;

    public MovieController(IRepository<Movie> movieRepository)
    {
        _movieRepository = movieRepository;
    }

    [HttpGet]
    public async Task<IEnumerable<Movie>> GetAll()
    {
        return await _movieRepository.GetAll();
    }


    [HttpPost]
    public async Task<IActionResult> Insert([FromBody] Movie movie)
    {
        try
        {
            var newMovie = await _movieRepository.Insert(movie);
            return Created($"/movie/{movie.Id}", newMovie);
        }
        catch (Exception)
        {
            return BadRequest();
        }
    }

    }
}