import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'server/auth.service';

@Component({
  selector: 'app-forfun-page',
  templateUrl: './forfun-page.component.html',
  styleUrls: ['./forfun-page.component.css']
})
export class forfunPageComponent implements OnInit {
  questions = [
    {
      question: "What is the name of the wizarding school in Harry Potter?",
      options: ["Hogwarts", "Beauxbatons", "Durmstrang", "Ilvermorny"],
      answer: "Hogwarts"
    },
    {
      question: "Who is the author of 'The Lord of the Rings'?",
      options: ["J.R.R. Tolkien", "J.K. Rowling", "George R.R. Martin", "C.S. Lewis"],
      answer: "J.R.R. Tolkien"
    },
    {
      question: "In 'The Chronicles of Narnia', which character is known as the 'Great Lion'?",
      options: ["Aslan", "Gimli", "Aragorn", "Legolas"],
      answer: "Aslan"
    },
    {
      question: "What is the name of the hobbit played by Elijah Wood in the 'The Lord of the Rings' movies?",
      options: ["Bilbo Baggins", "Frodo Baggins", "Samwise Gamgee", "Pippin Took"],
      answer: "Frodo Baggins"
    },
    {
      question: "Who wrote 'Pride and Prejudice'?",
      options: ["Jane Austen", "Charlotte Bronte", "Emily Bronte", "Mary Shelley"],
      answer: "Jane Austen"
    },
    {
      question: "In 'To Kill a Mockingbird', who is the narrator?",
      options: ["Scout Finch", "Atticus Finch", "Jem Finch", "Tom Robinson"],
      answer: "Scout Finch"
    },
    {
      question: "What is the name of the island in 'Lord of the Flies'?",
      options: ["Treasure Island", "The Island", "Coral Island", "The Lagoon"],
      answer: "The Island"
    },
    {
      question: "Who wrote '1984'?",
      options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Isaac Asimov"],
      answer: "George Orwell"
    },
    {
      question: "In 'Moby-Dick', what is the name of Captain Ahab's ship?",
      options: ["Pequod", "Beagle", "Endeavour", "Nautilus"],
      answer: "Pequod"
    },
    {
      question: "What is the first name of Dr. Jekyll in 'Strange Case of Dr Jekyll and Mr Hyde'?",
      options: ["Henry", "James", "John", "Edward"],
      answer: "Henry"
    }
  ];
  currentQuestionIndex = 0;
  score = 0;
  quizCompleted = false;
  selectedOption: string | null = null;
  selectedOptionIndex: number | null = null;

  constructor(private authService: AuthService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    if (!this.authService.isLoggedIn) {
      this.showNotification('You must be logged in first to use this option.');
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 1);
    }
  }

  answerQuestion(option: string, optionIndex: number) {
    this.selectedOption = option;
    this.selectedOptionIndex = optionIndex;

    if (option === this.questions[this.currentQuestionIndex].answer) {
      this.score++;
    }

    setTimeout(() => {
      this.currentQuestionIndex++;
      this.selectedOption = null;
      this.selectedOptionIndex = null;

      if (this.currentQuestionIndex >= this.questions.length) {
        this.quizCompleted = true;
      }
    }, 2000);
  }

  saveScore() {
    const userName = this.authService.getUserId();
    const scoreData = { userName, score: this.score };
    this.http.post('http://localhost:3000/save-score', scoreData).subscribe(
      response => {
        console.log('Score saved successfully');
        this.showNotification('Score updated successfully! Redirecting to home page in 3 seconds...');
        setTimeout(() => {
          this.router.navigate(['/books']);
        }, 3000);
      },
      error => {
        console.error('Error saving score:', error);
      }
    );
  }

  showNotification(message: string): void {
    alert(message);
  }
}
