﻿namespace BookApi.Models
{
    public class Book
    {
        public int Id { get; set; } 
        public required string Title { get; set; }
        public required string Author { get; set; }
    }
}
