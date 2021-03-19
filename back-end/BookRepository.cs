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


    public async Task Delete(long id)
    {
        using var connection = CreateConnection();
        await connection.ExecuteAsync("DELETE FROM Movies WHERE Id = @Id;", new { Id = id });
    }

    public async Task<Movie> Get(long id)
    {
        using var connection = CreateConnection();
        return await connection.QuerySingleAsync<Movie>("SELECT * FROM Movies WHERE Id = @Id;", new { Id = id });
    }

    public async Task<Movie> Update(Movie Movie)
    {
        using var connection = CreateConnection();
        return await connection.QuerySingleAsync<Movie>("UPDATE Movies SET Title = @Title, Author = @Author WHERE Id = @Id RETURNING *", Movie);
    }

    public async Task<Movie> Insert(Movie Movie)
    {
        using var connection = CreateConnection();
        return await connection.QuerySingleAsync<Movie>("INSERT INTO Movies (Title, Author) VALUES (@Title, @Author) RETURNING *;", Movie);
    }
}

