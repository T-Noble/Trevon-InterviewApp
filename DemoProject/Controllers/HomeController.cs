using DemoProject.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace DemoProject.Controllers
{
    public class HomeController : Controller
    {

        public HomeController()
        {
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult GetQuestions()
        {
            var questions = new List<Question>
            {
                //Added hint to Question object #1
                new Question { 
                    Id = 1, 
                    QuestionText = "What is a scoped service?", 
                    Answer = "A service that can be used per request.", 
                    Hint = "Defines the lifetime of a service. \nThe scope is created and dies with the request." },

                //Added hint to Question object #2
                new Question { 
                    Id = 2, 
                    QuestionText = "What does MVC stand for?", 
                    Answer = "Model View Controller" , 
                    Hint = "M - Handles data and business logic, the user doesn't see this\nV - What the user sees on the page\nC - Receives input and directs the flow of data"}
            };
            return Ok(questions);
        }

    }
}
