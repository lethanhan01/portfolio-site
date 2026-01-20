import React from 'react';

export interface CertificationsProps {}

const Certifications: React.FC<CertificationsProps> = () => {
    const certificates = [
        {
            title: 'Git & GitHub',
            src: require('../../assets/certificate/Git-Github.png'),
        },
        {
            title: 'HTML, CSS & JavaScript',
            src: require('../../assets/certificate/HTML, CSS & Javascript.png'),
        },
        {
            title: 'Java cơ bản',
            src: require('../../assets/certificate/Java cơ bản.png'),
        },
        {
            title: 'Java Advanced',
            src: require('../../assets/certificate/Java-Advanced.png'),
        },
        {
            title: 'JavaScript cơ bản',
            src: require('../../assets/certificate/JavaScript cơ bản.png'),
        },
        {
            title: 'JavaScript',
            src: require('../../assets/certificate/js.jpg'),
        },
        {
            title: 'Lập trình hướng đối tượng trong Java',
            src: require('../../assets/certificate/Lập trình hướng đối tượng trong java.png'),
        },
        {
            title: 'React Front-end',
            src: require('../../assets/certificate/react-fe.png'),
        },
        {
            title: 'React',
            src: require('../../assets/certificate/react.jpg'),
        },
        {
            title: 'Software Engineering',
            src: require('../../assets/certificate/Software Engineering.png'),
        },
        {
            title: 'UI/UX',
            src: require('../../assets/certificate/UI-UX.png'),
        },
        {
            title: 'Cloud Computing',
            src: require('../../assets/certificate/cloud_computing.png'),
        },
    ];

    return (
        <div className="site-page-content">
            <h1>Certificates</h1>
            <br />
            {certificates.map((certificate) => (
                <div className="text-block" key={certificate.title}>
                    <div className="captioned-image" style={styles.captioned}>
                        <img
                            src={certificate.src}
                            alt={certificate.title}
                            style={styles.image}
                        />
                        <p>{certificate.title}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

const styles: StyleSheetCSS = {
    captioned: {
        maxWidth: 520,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    image: {
        width: '100%',
        maxWidth: 520,
        height: 'auto',
    },
};

export default Certifications;
