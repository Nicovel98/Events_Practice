import PropTypes from "prop-types";

export const MyComponent = ({ name, lastname }) => {

    const student = {
        name: "Juan Pablo ",
        lastname: "Cortés",
        age: 30,
        course: "React Avanzado"
    };

    console.log(student);

    return (
        <div>
            <hr />
            <h3>Primer Componente</h3>
            <p>Curso de React</p>
            <p>Docente: <b>{name}{lastname}</b></p>
            <ul>
                <li>Componentes</li>
                <li>Eventos</li>
                <li>Estados- Hooks</li>
                <li>EComunicación</li>
            </ul>
            <p>Estudiante: <b>{student.name}{student.lastname}</b></p>
            <ul>
                <li>Nombre: {student.name}</li>
                <li>Apellido: {student.lastname}</li>
                <li>Edad: {student.age}</li>
                <li>Curso: {student.course}</li>
            </ul>
        </div>
    )
}

MyComponent.propTypes = {
    name: PropTypes.string,
    lastname: PropTypes.string,
    mobile: PropTypes.string,
    events: PropTypes.string,

};
