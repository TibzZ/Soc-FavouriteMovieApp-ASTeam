using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using Dapper;
using System.Threading.Tasks;



public class MovieRepository : BaseRepository, IRepository<Movie>
{

    public MovieRepository(IConfiguration configuration) : base(configuration) { }


    // TO AMENED SQL
    public async Task<IEnumerable<Movie>> GetAll()
    {
        using var connection = CreateConnection();
        IEnumerable<Movie> Movies = await connection.QueryAsync<Movie>("SELECT * FROM Movies;");
        return Movies;
    }
    public async Task<Movie> Get(int id)
    {
        using var connection = CreateConnection();
        return await connection.QuerySingleAsync<Movie>("SELECT * FROM Movies WHERE Id = @Id;", new { Id = id });
    }


    public async Task<Movie> Insert(Movie Movie)
    {
        using var connection = CreateConnection();
        //return await connection.QuerySingleAsync<Movie>("INSERT INTO Movies (Title, Image, Rating, Comments) VALUES (@Title, @Image, @Rating, @Comments ) RETURNING *;", Movie);

        return await connection.QuerySingleAsync<Movie>("INSERT INTO Movies (Title) VALUES (@Title) RETURNING *;", Movie);
    }
}

