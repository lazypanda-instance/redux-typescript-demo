import styles from "./footer.module.scss";

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <nav className="navbar fixed-bottom navbar-light bg-primary">
                <div className="container-fluid">
                    <span>Footer</span>
                </div>
            </nav>
        </div>
    );
}

export default Footer;