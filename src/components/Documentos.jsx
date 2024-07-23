import docRIE from '../assets/documents/RIE.pdf';
import docPISE from '../assets/documents/PISE.pdf';
import docEvaluacion from '../assets/documents/reglamento2024.pdf';
import docConvivencia from '../assets/documents/convivencia.pdf';
import docCAA from '../assets/documents/reglamentoCAA.pdf';
import docBecas from '../assets/documents/becas.pdf';

export default function Documentos() {
  return (
    <>
      <div className="container box">
        <nav className="panel">
          <p className="panel-heading">Documentos</p>
          <div className="panel-block">

          </div>

          <a className="panel-block is-active" href={docRIE} target='_blank'>
            <span className="panel-icon">
              <i className="fas fa-file-pdf" aria-hidden="true"></i>
            </span>
            Reglamento Interno Escolar
          </a>
          <a className="panel-block" href={docPISE} target='_blank'>
            <span className="panel-icon">
              <i className="fas fa-file-pdf" aria-hidden="true"></i>
            </span>
            PISE 2021
          </a>
          <a className="panel-block" href={docEvaluacion} target='_blank'>
            <span className="panel-icon">
              <i className="fas fa-file-pdf" aria-hidden="true"></i>
            </span>
            Reglamento de Evaluación, Calificación y Promoción
          </a>
          <a className="panel-block" href={docConvivencia} target='_blank'>
            <span className="panel-icon">
              <i className="fas fa-file-pdf" aria-hidden="true"></i>
            </span>
            Reglamento de Convivencia Escolar
          </a>
          <a className="panel-block" href={docCAA} target='_blank'>
            <span className="panel-icon">
              <i className="fas fa-file-pdf" aria-hidden="true"></i>
            </span>
            Reglamento CAA
          </a>
          <a className="panel-block" href={docBecas} target='_blank'>
            <span className="panel-icon">
              <i className="fas fa-file-pdf" aria-hidden="true"></i>
            </span>
            Reglamento de Becas Nuevo 2023
          </a>
          <a className="panel-block" href="https://docs.google.com/presentation/d/1A6veBWunEKR_v2cq22LK7uKLjV9ttwVHQO2HybI4MIY/edit#slide=id.p1" target='_blank'>
            <span className="panel-icon">
              <i className="fas fa-file-pdf" aria-hidden="true"></i>
            </span>
            Cuenta Pública 2023
          </a>

        </nav>
      </div>
    </>
  )
}