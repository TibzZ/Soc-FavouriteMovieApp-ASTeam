using FluentAssertions;
using back_end.Controllers;
using back_end.Models;
using Microsoft.AspNetCore.Mvc;
using NSubstitute;
using System.Threading.Tasks;
using Moq;

namespace back_end.UnitTests
{
    public class WhenGetAllMethodIsCalled
    { 
           private readonly MovieController _controller;
            private List<Movie> _movie;
        public GetMovieList()
        {
             var movieList = new List<Movie>();
             movieList.Add()(new Movie()
             {
              Id = 234,
              Title = "Noah"
             });
              movieList.Add()(new Movie()
             {
            Id = 234,
            Title = "The Two Popes"
             });
        return movieList;
        }
             

         public async Task WhenGetAllMethodIsCalled_OkStatusIsReturnedAndDisplayAllMovies()
        {
            
            var mockRepo = new Mock<IRepository<Movie>>();
            mockRepo.Setup(repo => repo.GetAll())
                          .ReturnsAsync(GetMovieList());
            var controller = new MovieController(mockRepo.Object);

            var result = await controller.Getall("");
            var viewResult = Assert.IsType<OkObjectResult>(result);

            var model = Assert.IsAssignableFrom<IEnumerable<Movie>>(viewResult.Value);
            Assert.Equal(2, model.Count());
        

        }
       
    
    }
}
