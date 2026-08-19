import * as Styled from "./styled";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Styled.Wrapper>
            <div className="footerContent">
                <p className="copyright">
                    © {currentYear} Ashish Ranjan. All rights reserved.
                </p>

                <p className="credit">
                    Developed by{" "}
                    <a
                        href="https://www.ashishranjan.net"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ashish Ranjan
                    </a>
                </p>
            </div>
        </Styled.Wrapper>
    );
};

export default Footer;
