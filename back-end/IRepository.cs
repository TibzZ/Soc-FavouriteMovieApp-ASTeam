using System.Collections.Generic;
using System.Threading.Tasks;


public interface IRepository<T>
{
    Task<IEnumerable<T>> GetAll();
    Task<T> Get(int id);
    Task<T> Insert(T t);

}