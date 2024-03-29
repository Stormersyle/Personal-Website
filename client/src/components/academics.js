import React from "react";
import "../stylesheets/academics.css";

const academics = () => {
  return (
    <div>
      <h1>Academics</h1>
      <h2>Relevant Coursework</h2>
      <h3>Math classes:</h3>
      <ul>
        <li>18.701: Abstract Algebra I (A)</li>
        <li>18.600: Probability & Random Variables (A+)</li>
        <li>18.06: Linear Algebra (ASE'd)</li>
        <li>18.01 & 18.02: Single-Variable & Multivariable Calculus (ASE'd)</li>
        <li>18.100B: Real Analysis (current)</li>
        <li>18.650: Fundamentals of Statistics (current)</li>
      </ul>
      <h3>Computer science classes:</h3>
      <ul>
        <li>6.101: Fundamentals of Programming (A)</li>
        <li>6.100B: Intro to Computational Thinking & Data Science (A)</li>
        <li>6.390: Introduction to Machine Learning (current)</li>
      </ul>
      <h2>Notes</h2>
      <p>
        Here is a collection of some notes I have written for various things. I believe that for
        most areas, there are existing resources that present the material relatively well, so I try
        not to reinvent the wheel. However, I personally believe that in mathematics, what matters
        above all is gaining a deep, intuitive understanding of the content; so for certain topics
        for which I had to derive much of the intuition myself, I've written up some notes on them
        that hopefully others may find useful.
      </p>
      <ul>
        <li>
          <a href="google.com" target="_blank">
            Linear Algebra Notes
          </a>
          <p>There are a more intuitive treatment of linear algebra.</p>
        </li>
        <li>
          <a href="google.com" target="_blank">
            Linear Algebra Notes
          </a>
          <p>There are a more intuitive treatment of linear algebra.</p>
        </li>
      </ul>
      <h2>Research</h2>
      <p>Just putting this text here for now</p>
      <h2>Initiatives</h2>
      <p>
        I'm passionate about. In high school, I founded <a href="https://math4all.org">Math4All</a>,
        a nonprofit dedicated to making competitive math more accessible. I also founded{" "}
        <a href="https://pvmt.org">PVMT</a>, my high school's (now annually recurring) math
        tournament.
      </p>
      <p>
        Currently in college, I'm involved in MIT THINK, a research program/competition (geared
        towards high school students) that provides funding and mentorship to selected finalists.
        I'm also on the Social Committee of MIT's Undergrad Math Association.
      </p>
    </div>
  );
};

const academics_temp = () => {
  return (
    <div>
      <h1>Academics</h1>
      <h2>Relevant Coursework</h2>
      <h3>Math classes:</h3>
      <ul>
        <li>18.701: Abstract Algebra I (A)</li>
        <li>18.600: Probability & Random Variables (A+)</li>
        <li>18.06: Linear Algebra (ASE'd)</li>
        <li>18.01 & 18.02: Single-Variable & Multivariable Calculus (ASE'd)</li>
        <li>18.100B: Real Analysis (current)</li>
        <li>18.650: Fundamentals of Statistics (current)</li>
      </ul>
      <h3>Computer science classes:</h3>
      <ul>
        <li>6.101: Fundamentals of Programming (A)</li>
        <li>6.100B: Intro to Computational Thinking & Data Science (A)</li>
        <li>6.390: Introduction to Machine Learning (current)</li>
      </ul>
      <p>I will add more stuff about notes, research, and intiatives onto this page soon.</p>
    </div>
  );
};

export default academics_temp;
