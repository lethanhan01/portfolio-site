import React from 'react';

export interface CertificationsProps {}

const Certifications: React.FC<CertificationsProps> = () => {
    return (
        <div className="site-page-content">
            <h1>Certifications</h1>
            <h3>Credentials</h3>
            <br />
            <div className="text-block">
                <p>Danh sách chứng chỉ sẽ được cập nhật tại đây.</p>
            </div>
        </div>
    );
};

export default Certifications;
