import React from "react";
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Algunos de mis proyectos</h1>
        <div className="projects-grid">
            
            {/* --- PROYECTO 1: TRADUCTOR --- */}
            <div className="project">
                <a href="https://github.com/Alberjr1/Pascal-ToC-Translator.git" target="_blank" rel="noreferrer">
                    <h2>Traductor de Pascal a C</h2>
                </a>
                <p>Desarrollo de un traductor de lenguajes de programación. Aplicación de análisis léxico, sintáctico y semántico para convertir código fuente de Pascal a C. Todo ello haciendo uso de Java y ANTLR</p>
            </div>

            {/* --- PROYECTO 2: MINISHELL --- */}
            <div className="project">
                <a href="https://github.com/Alberjr1/Minishell.git" target="_blank" rel="noreferrer">
                    <h2>Minishell</h2>
                </a>
                <p>Implementación en C de una versión simplificada de una shell.</p>
            </div>

            {/* --- PROYECTO 3: BUSCAMINAS --- */}
            <div className="project">
                <a href="https://github.com/Alberjr1/BuscaMinas.git" target="_blank" rel="noreferrer">
                    <h2>Buscaminas (POO)</h2>
                </a>
                <p>Desarrollo en Java del clásico juego del Buscaminas aplicando patrones de diseño y conceptos avanzados de Programación Orientada a Objetos.</p>
            </div>

            {/* --- PROYECTO 4: TORNEOS DE FÚTBOL --- */}
            <div className="project">
                <a href="https://github.com/Alberjr1/Web-Torneos.git" target="_blank" rel="noreferrer">
                    <h2>Gestor de Torneos de Fútbol</h2>
                </a>
                <p>Desarrollo de una plataforma web para la creación y administración de torneos de futbol. Interfaz de usuario construida con HTML, CSS y JavaScript, con la lógica de servidor y gestión de base de datos implementadas en Java.</p>
            </div>

        </div>
    </div>
    );
}

export default Project;