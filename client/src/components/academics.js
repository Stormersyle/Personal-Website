import React from "react";
import "../stylesheets/academics.css";

const Academics = () => {
  return (
    <div className="page-container">
      <p className="u-xl">Academics</p>
      <br />
      <div className="coursework">
        <p className="u-l">Coursework</p>
        <br />
        <p className="u-m2">Spring 2023:</p>
        <ul>
          <li>18.650: Fundamentals of Statistics</li>
          <li>18.100B: Real Analysis</li>
          <li>6.3900: Introduction to Machine Learning</li>
          <li>14.02: Principles of Macroeconomics</li>
          <li>21W.031: Science Writing and New Media</li>
        </ul>
        <br />
        <p className="u-m2">Fall 2023:</p>
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
        <br />
      </div>
      <div className="notes">
        <p className="u-l">Notes</p>
        <br />
        <p>
          Here is a collection of some notes/handouts I have written on various topics. I believe
          that for most areas, there are existing resources that present the material relatively
          well, so I try not to reinvent the wheel. However, for some classes/topics I found that
          existing treatments are inadequate/ineffective (at least for me), so for those I've
          written up some notes on that hopefully others may find useful.
        </p>
        <br />
        <ul>
          <li>
            <a href="google.com" target="_blank">
              Linear Algebra: An Intuition-Focused Development
            </a>
            <p>
              A typical first course in linear algebra focuses on performing computations rather
              than a deep understanding of concepts, resulting in many students struggling to grasp
              what's "really going on". Even in proof-based books like Artin's Algebra or Axler's
              LADR, a lot of intuition is left out. In these notes, I try to present the entirety of
              the content of a first course in linear algebra from an rigorous yet intuitive
              perspective. At the end, I also present some connections to group theory.
            </p>
            <br />
          </li>
          <li>
            <a
              href="https://docs.google.com/document/d/13GByAOuUq-HfVmeXN9pZMD-Y38vAUrIMP_p6QAQm_zM/edit?usp=sharing"
              target="_blank"
            >
              Web Lab Notes
            </a>
            <p>
              Here are my notes for MIT's Web Lab, which I find much easier to use as a reference
              than Google searching. So far, these notes are focused entirely on Javascript and the
              MERN stack because that's what Web Lab taught; I plan to add some more
              languages/frameworks/databases (e.g. NextJS, Flask, Django, SQL) once I find the time
              to learn them.
            </p>
          </li>
        </ul>
      </div>
      <br />
      <div className="research">
        <p className="u-l">Research</p>
        <br />
        <p>Coming soon</p>
      </div>
      <br />
      <div className="initiatives">
        <p className="u-l">Initiatives</p>
        <br />
        <p>Coming soon</p>
      </div>
    </div>
  );
};

export default Academics;
