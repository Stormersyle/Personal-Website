import React from "react";
import "../stylesheets/academics.css";

const Academics = () => {
  return (
    <div>
      <h1>Academics</h1>
      <h2>Relevant Coursework</h2>
      <h3>Spring 2023:</h3>
      <ul>
        <li>18.650: Fundamentals of Statistics</li>
        <li>18.100B: Real Analysis</li>
        <li>6.3900: Introduction to Machine Learning</li>
        <li>14.02: Principles of Macroeconomics</li>
        <li>21W.031: Science Writing and New Media</li>
      </ul>
      <h3>Fall 2023:</h3>
      <ul>
        <li>18.701: Abstract Algebra I (A)</li>
        <li>18.600: Probability & Random Variables (A+)</li>
        <li>6.1010: Fundamentals of Programming (A)</li>
        <li>6.100B: Intro to Computational Thinking & Data Science (A)</li>
        <li>7.012: Intro to Biology</li>
        <li>18.01: Single-Variable Calculus (AP credit)</li>
        <li>18.02: Multivariable Calculus (ASE'd)</li>
        <li>18.06: Linear Algebra (ASE'd)</li>
        <li>8.01: Physics I (AP credit)</li>
        <li>6.100A: Intro to Python (ASE'd)</li>
      </ul>
      <h2>Notes</h2>
      <p>
        Here is a collection of some notes/handouts I have written on various topics. I believe that
        for most areas, there are existing resources that present the material relatively well, so I
        try not to reinvent the wheel. However, for some classes/topics I feel that existing
        treatments tend to be inadequate, so for those I've written up some notes on that hopefully
        others may find useful.
      </p>
      <ul>
        <li>
          <a href="google.com" target="_blank">
            Linear Algebra: An Intuition-Focused Development
          </a>
          <p>
            A typical first course in linear algebra focuses on performing computations rather than
            a deep understanding of concepts, resulting in many students struggling to grasp what's
            "really going on". Even in proof-based books like Artin's Algebra or Axler's LADR, a lot
            of intuition is left out. In these notes, I try to present the entirety of the content
            of a first course in linear algebra from an rigorous yet intuitive perspective. At the
            end, I also present some connections to group theory.
          </p>
        </li>
        <li>
          <a
            href="https://docs.google.com/document/d/13GByAOuUq-HfVmeXN9pZMD-Y38vAUrIMP_p6QAQm_zM/edit?usp=sharing"
            target="_blank"
          >
            Web Lab Notes
          </a>
          <p>
            Here are my notes for MIT's Web Lab, which I find much easier to use as a reference than
            Google searching. So far, these notes are focused entirely on Javascript and the MERN
            stack because that's what Web Lab taught; I plan to add some more
            languages/frameworks/databases (e.g. NextJS, Flask, Django, SQL) once I find the time to
            learn them.
          </p>
        </li>
      </ul>
      <h2>Research</h2>
      <p>Coming soon</p>
      <h2>Initiatives</h2>
      <p>Coming soon</p>
    </div>
  );
};

export default Academics;
