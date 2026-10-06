function Header() {
    return (
        <header className="app-header">
            <div className="header-left">
                <div className="bank-icon">🏦</div>

                <div>
                    <h1>Banking AI Assistant</h1>
                    <p>Powered by Spring AI</p>
                </div>
            </div>

            <div className="status">
                <span className="status-dot"></span>
                AI Online
            </div>
        </header>
    );
}

export default Header;
