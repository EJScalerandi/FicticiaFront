

function Footer() {
    return (
        <footer style={{
            backgroundColor: "#f1f1f1",  
            padding: "20px",
            textAlign: "center",
            fontSize: "14px",
            color: "#333",
            borderTop: "1px solid #e7e7e7"
        }}>
            <p style={{ margin: "5px 0", fontWeight: "bold" }}>Esteban Javier Scalerandi</p>
            <p style={{ margin: "5px 0" }}>Programador FullStack</p>
            <p style={{ margin: "5px 0" }}>Argentina, Córdoba</p>
            <p style={{ margin: "5px 0" }}>
                Tel: <a href="tel:+543572400170" style={{ color: "#333", textDecoration: "none" }}>3572-400170</a>
            </p>
            <p style={{ margin: "5px 0" }}>
                Email: <a href="mailto:estebanscalerandi.dev@gmail.com" style={{ color: "#333", textDecoration: "none" }}>estebanscalerandi.dev@gmail.com</a>
            </p>
            <p style={{ margin: "5px 0" }}>
                <a href="https://www.linkedin.com/in/esteban-javier-scalerandi-807386277" target="_blank" rel="noopener noreferrer" style={{ color: "#0077B5", marginRight: "10px" }}>
                    LinkedIn
                </a>
                <a href="https://github.com/EJScalerandi" target="_blank" rel="noopener noreferrer" style={{ color: "#333" }}>
                    GitHub
                </a>
            </p>
        </footer>
    );
}

export default Footer;
