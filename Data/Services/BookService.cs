
using System.Collections.Generic;

namespace Augusta_Tech___Rural_Sourcing.Data{
    public class BookService : IBookService
    {
        public void AddBook(Book newBook)
        {
            Data.Books.Add(newBook);
        }

        public void DeleteBook(int id)
        {
            throw new System.NotImplementedException();
        }

        public List<Book> GetAllBooks()
        {
            throw new System.NotImplementedException();
        }

        public Book GetBookById(int id)
        {
            throw new System.NotImplementedException();
        }

        public void UpdateBook(int id, Book newBook)
        {
            throw new System.NotImplementedException();
        }
    }
}