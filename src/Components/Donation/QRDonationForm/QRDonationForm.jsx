// src/components/QRDonationForm/QRDonationForm.js
import React, { useState} from 'react';
import './QRDonationForm.css'

import logo from '../../../images/logo4.png'


const QRDonationForm = () => {
    const [copiedField, setCopiedField] = useState('');

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(fieldName);
      setTimeout(() => setCopiedField(''), 2000);
    });
  };

  const bankDetails = {
    accountName: "Yogalayaa Foundation",
    accountNumber: "1234567890123456",
    ifscCode: "SBIN0001234",
    bankName: "State Bank of India",
    branch: "Main Branch"
  };

  const upiId = "yogalayaa@paytm";

  // Custom SVG Icons
  const HeartIcon = ({ size = 24, color = "#current" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  );

  const CopyIcon = ({ size = 16, color = "#current" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
    </svg>
  );

  const CheckIcon = ({ size = 16, color = "#current" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20,6 9,17 4,12"/>
    </svg>
  );

  const UsersIcon = ({ size = 24, color = "#current" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );

  const TargetIcon = ({ size = 24, color = "#current" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="6"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>
  );

  const SparklesIcon = ({ size = 24, color = "#current" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.09 3.26L16.35 7.35 13.09 8.44 12 11.7 10.91 8.44 7.65 7.35 10.91 6.26 12 3z"/>
      <path d="M19 12l.35 1.09L20.44 13.91 19.35 14.26 19 15.61 18.65 14.26 17.56 13.91 18.65 13.09 19 12z"/>
      <path d="M19 4l.35 1.09L20.44 5.91 19.35 6.26 19 7.61 18.65 6.26 17.56 5.91 18.65 5.09 19 4z"/>
    </svg>
  );

  const PhoneIcon = ({ size = 18, color = "#current" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );

  const MailIcon = ({ size = 18, color = "#current" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );

  const GlobeIcon = ({ size = 18, color = "#current" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  );

  const impactStats = [
    { icon: UsersIcon, number: "500+", label: "Lives Transformed" },
    { icon: TargetIcon, number: "50+", label: "Classes Monthly" },
    { icon: SparklesIcon, number: "5+", label: "Years of Service" }
  ];

  return (
    <div className="donation-page">
      <div className="background-particles"></div>

      <div className="container">
        <div className="main-card">
          {/* Hero Section */}
          <div className="hero-section">
            <div className="hero-decorations">
              <div className="decoration decoration-1"></div>
              <div className="decoration decoration-2"></div>
            </div>

            <div className="logo-section">
              {/* Replace this img src with your actual logo path */}
              <img 
                src={logo}
                alt="Yogalayaa Logo" 
                className="logo"
              />
              <h1 className="main-title">Yogalayaa</h1>
            </div>
            
            <p className="hero-subtitle">
              Transforming Lives Through Ancient Wisdom & Modern Wellness
            </p>

            {/* Impact Stats */}
            <div className="impact-stats">
              {impactStats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <stat.icon size={24} color="#fff" />
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="content-section">
            {/* Mission Statement */}
            <div className="mission-section">
              <h2 className="section-title">Support Our Mission of Wellness</h2>
              <p className="mission-text">
                At Yogalayaa, we believe that wellness should be accessible to everyone. Our foundation has been dedicated to spreading the transformative power of yoga, meditation, and holistic wellness practices across communities for over five years.
              </p>
              <p className="mission-subtext">
                Your generous contribution helps us continue offering free and subsidized classes, teacher training programs, and wellness workshops to those who need them most.
              </p>
            </div>

            {/* Donation Methods Grid */}
            <div className="donation-methods">
              {/* Bank Transfer Card */}
              <div className="payment-card bank-card">
                <div className="card-header-line bank-line"></div>
                <h3 className="card-title bank-title">
                  <span className="title-dot bank-dot-1"></span>
                  Bank Transfer
                  <span className="title-dot bank-dot-2"></span>
                </h3>
                
                <div className="bank-details">
                  {Object.entries({
                    'Account Name': bankDetails.accountName,
                    'Account Number': bankDetails.accountNumber,
                    'IFSC Code': bankDetails.ifscCode,
                    'Bank Name': bankDetails.bankName,
                    'Branch': bankDetails.branch
                  }).map(([label, value], index) => (
                    <div key={label} className={`detail-row ${index % 2 === 0 ? 'even' : 'odd'}`}>
                      <span className="detail-label">{label}</span>
                      <div className="detail-value-container">
                        <span className="detail-value">{value}</span>
                        <button
                          onClick={() => copyToClipboard(value, label)}
                          className={`copy-btn ${copiedField === label ? 'copied' : ''}`}
                        >
                          {copiedField === label ? 
                            <CheckIcon size={16} color="#fff" /> : 
                            <CopyIcon size={16} color="#fff" />
                          }
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* UPI Payment Card */}
              <div className="payment-card upi-card">
                <div className="card-header-line upi-line"></div>
                <h3 className="card-title upi-title">
                  <span className="title-dot upi-dot-1"></span>
                  UPI Payment
                  <span className="title-dot upi-dot-2"></span>
                </h3>
                
                {/* QR Code */}
                <div className="qr-container">
                  <div className="qr-code">
                    <div className="qr-pattern"></div>
                    <div className="qr-label">SCAN ME</div>
                  </div>
                </div>

                {/* UPI ID */}
                <div className="upi-id-container">
                  <span className="upi-id">{upiId}</span>
                  <button
                    onClick={() => copyToClipboard(upiId, 'UPI ID')}
                    className={`copy-btn upi-copy ${copiedField === 'UPI ID' ? 'copied' : ''}`}
                  >
                    {copiedField === 'UPI ID' ? 
                      <CheckIcon size={18} color="#fff" /> : 
                      <CopyIcon size={18} color="#fff" />
                    }
                  </button>
                </div>

                <p className="upi-instruction">
                  Scan QR code or use UPI ID for instant payment
                </p>
              </div>
            </div>

            {/* Thank You Section */}
            <div className="thank-you-section">
              <div className="thank-you-decoration"></div>
              <div className="thank-you-icon">
                <HeartIcon size={30} color="#059669" />
              </div>
              <h3 className="thank-you-title">Thank You for Your Generosity</h3>
              <p className="thank-you-text">
                Every donation, regardless of size, creates ripples of positive change in our community. 
                Your support enables us to continue our mission of making wellness accessible to all, 
                fostering inner peace, and building a healthier society together.
              </p>
            </div>

            {/* Tax Benefits Section */}
            <div className="tax-benefits-section">
              <h4 className="section-subtitle">Tax Benefits & Transparency</h4>
              <div className="benefits-grid">
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14,2 14,8 20,8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10,9 9,9 8,9"/>
                    </svg>
                  </div>
                  <h5>80G Tax Exemption</h5>
                  <p>Your donations are eligible for 50% tax deduction under Section 80G of the Income Tax Act.</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2">
                      <path d="M9 12l2 2 4-4"/>
                      <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
                      <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
                      <path d="M13 12h3a2 2 0 0 1 2 2v1"/>
                      <path d="M13 12h-3a2 2 0 0 0-2 2v1"/>
                    </svg>
                  </div>
                  <h5>Official Receipts</h5>
                  <p>Receive official donation receipts for tax filing purposes within 48 hours of your contribution.</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                    </svg>
                  </div>
                  <h5>Annual Reports</h5>
                  <p>Access detailed annual reports showing how your donations are utilized for maximum transparency.</p>
                </div>
              </div>
            </div>

            {/* How We Use Donations */}
            <div className="usage-section">
              <h4 className="section-subtitle">How Your Donations Make a Difference</h4>
              <div className="usage-breakdown">
                <div className="usage-item">
                  <div className="usage-bar">
                    <div className="usage-fill" style={{width: '45%', backgroundColor: '#667eea'}}></div>
                  </div>
                  <div className="usage-details">
                    <span className="usage-label">Free Yoga Classes & Workshops</span>
                    <span className="usage-percentage">45%</span>
                  </div>
                  <p className="usage-description">Conducting free yoga sessions for underprivileged communities</p>
                </div>
                <div className="usage-item">
                  <div className="usage-bar">
                    <div className="usage-fill" style={{width: '30%', backgroundColor: '#10b981'}}></div>
                  </div>
                  <div className="usage-details">
                    <span className="usage-label">Teacher Training Programs</span>
                    <span className="usage-percentage">30%</span>
                  </div>
                  <p className="usage-description">Training certified yoga instructors for community outreach</p>
                </div>
                <div className="usage-item">
                  <div className="usage-bar">
                    <div className="usage-fill" style={{width: '15%', backgroundColor: '#f59e0b'}}></div>
                  </div>
                  <div className="usage-details">
                    <span className="usage-label">Equipment & Infrastructure</span>
                    <span className="usage-percentage">15%</span>
                  </div>
                  <p className="usage-description">Yoga mats, props, and facility maintenance</p>
                </div>
                <div className="usage-item">
                  <div className="usage-bar">
                    <div className="usage-fill" style={{width: '10%', backgroundColor: '#8b5cf6'}}></div>
                  </div>
                  <div className="usage-details">
                    <span className="usage-label">Administrative Costs</span>
                    <span className="usage-percentage">10%</span>
                  </div>
                  <p className="usage-description">Minimal operational and administrative expenses</p>
                </div>
              </div>
            </div>

          
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRDonationForm;