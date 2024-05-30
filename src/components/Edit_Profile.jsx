import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import { Link, useLocation } from 'react-router-dom'; 
import { Card, Divider, Form, Input, Radio, DatePicker, Checkbox, List, Button, Select, Upload } from 'antd';
import { UserOutlined, DashboardOutlined, EditOutlined, ShoppingCartOutlined, HeartOutlined, MessageOutlined, BellOutlined, LogoutOutlined, StarFilled, StarOutlined, UploadOutlined, SaveOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { Option } = Select;

const Edit_Profile = () => {
    const [editMode, setEditMode] = useState(false);
    const [activeInput, setActiveInput] = useState(null);
    const [profileImage, setProfileImage] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const inputFileRef = useRef(null);
    const location = useLocation();
    const [userData, setUserData] = useState({
        fullName: '',
        email: '',
        mobileNumber: '',
        aboutMe: '',
        dob: null,
        gender: '',
        travel: [],
        country: '',
        state: '',
        city: ''
    });

    useEffect(() => {
        if (location.state && location.state.user) {
            console.log('User data received in edit profile:', location.state.user); 
            setUserData(location.state.user);
        }
    }, [location.state]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send updated user data to the server
            const response = await axios.put('/api/users/update', userData);
            console.log(response.data); 
            toast.success('Profile updated successfully');
            setEditMode(false); // After successful update, exit edit mode
        } catch (error) {
            console.error('Error updating user data:', error);
        }
    };

    const handleInputFocus = (input) => {
        setActiveInput(input);
    };

    const handleInputBlur = () => {
        setActiveInput(null);
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setProfileImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleUploadButtonClick = () => {
        inputFileRef.current.click();
    };

    const handleRemoveButtonClick = () => {
        setProfileImage(null);
        setSelectedImage(null);
    };

    const isActive = (url) => {
        return location.pathname === url;
    };

    
    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    const renderButton = () => {
        if (editMode) {
            return (
                <Button
                    type="primary"
                    htmlType="submit"
                    icon={<SaveOutlined />}
                    style={{
                        backgroundColor: 'red',
                        borderColor: 'red',
                        color: 'white',
                        marginTop: '20px',
                        width: '300px',
                        height: '50px'
                    }}
                    onClick={handleSubmit} // onClick handler to trigger handleSubmit function
                >
                    Save All Changes
                </Button>
            );
        } else {
            return (
                <Button
                    type="primary"
                    icon={<EditOutlined />}
                    style={{
                        backgroundColor: 'black',
                        borderColor: 'black',
                        color: 'white',
                        marginTop: '20px',
                        width: '300px',
                        height: '50px'
                    }}
                    onClick={toggleEditMode} // onClick handler to toggle edit mode
                >
                    Edit Profile
                </Button>
            );
        }
    };


    return (
        <div className="edit-profile-container" style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
            {/* Profile Details Card */}
            <div className="profile-details" style={{ width: '23%', marginRight: '0px', paddingLeft: '130px' }}>
                <Card className="profile-card" size="small" style={{ height: 'auto', borderColor: '#ccc', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    {/* Profile Image */}
                    <div className="profile-img-container">
                        {profileImage && (
                            <img
                                src={profileImage}
                                alt="Profile"
                                style={{ width: '200px', height: '200px', borderRadius: '50%', marginLeft: '48px' }}
                            />
                        )}
                        {!profileImage && <p>No profile image selected</p>}
                    </div>
                    {/* Star Rating */}
                    <div className="stars" style={{ textAlign: 'center', margin: '10px 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {[...Array(4)].map((_, index) => (
                            <StarFilled key={index} style={{ fontSize: '16px', color: '#ffc107' }} />
                        ))}
                        <StarOutlined style={{ fontSize: '16px', color: '#ffc107' }} />
                        <span style={{ marginLeft: '5px' }}>(410)</span>
                    </div>
                    <Divider />
                    {/* Menu */}
                    <div className="menu">
                        <List
                            itemLayout="horizontal"
                            dataSource={[
                                { icon: <DashboardOutlined />, text: 'Dashboard', url: '/dashboard' },
                                { icon: <EditOutlined />, text: 'Edit Profile', url: '/edit' },
                                { icon: <ShoppingCartOutlined />, text:
                                'My Orders', url: '/my-orders' },
                                { icon: <HeartOutlined />, text: 'My Favorites', url: '/my-favorites' },
                                { icon: <MessageOutlined />, text: 'Reviews', url: '/reviews' },
                                { icon: <MessageOutlined />, text: 'Messages', url: '/messages' },
                                { icon: <BellOutlined />, text: 'Notifications', url: '/notifications' },
                                { icon: <LogoutOutlined />, text: 'Logout', url: '/login' },
                                ]}
                                renderItem={item => (
                                    <List.Item className={`menu-item ${isActive(item.url) ? 'active' : ''}`}>

                                <List.Item.Meta
                                avatar={item.icon}
                                title={<Link to={item.url}>{item.text}</Link>}
                                />
                                </List.Item>
                                )}
                                />
                                </div>
                                </Card>
                                </div>        {/* Personal Information Card */}
        <div className="personal-info" style={{ width: '63%', paddingRight: '40px' }}>
            <Card className="info-card" title="Edit Profile" style={{ borderColor: '#ccc', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <Form layout="vertical" onSubmit={handleSubmit}>
                    {/* Name and Email Input */}
                    <div className="horizontal-inputs" style={{ display: 'flex', alignItems: 'center' }}>
                        <Form.Item label="Name" style={{ marginRight: '20px', flex: 1 }}>
                            <Input
                                name="fullName"
                                value={userData.fullName}
                                onChange={handleInputChange}
                                style={{ height: '40px', borderColor: '#ccc', borderWidth: '2px' }}
                                disabled={!editMode} // input field if not in edit mode
                            />
                        </Form.Item>
                        <Form.Item label="Email" style={{ flex: 1 }}>
                            <Input
                                name="email"
                                value={userData.email}
                                onChange={handleInputChange}
                                style={{ height: '40px', borderColor: '#ccc', borderWidth: '2px' }}
                                disabled={!editMode} // Disabled input field if not in edit mode
                            />
                        </Form.Item>
                    </div>
                    {/* Phone Number Input */}
                    <div className="horizontal-inputs" style={{ display: 'flex', alignItems: 'center' }}>
                        <Form.Item label="Phone Number" style={{ flex: 1 }}>
                            <Input
                                name="mobileNumber"
                                value={userData.mobileNumber}
                                onChange={handleInputChange}
                                style={{ height: '40px', borderColor: '#ccc', borderWidth: '2px' }}
                                disabled={!editMode} // Disable input field if not in edit mode
                            />
                        </Form.Item>
                    </div>

                    <Divider />

                    <Form.Item label="About Me">
                        <Input.TextArea
                            rows={4}
                            value={userData.aboutMe}
                            onChange={(e) => handleInputChange({ target: { name: 'aboutMe', value: e.target.value } })}
                            disabled={!editMode} // Disable input field if not in edit mode
                        />
                    </Form.Item>
                                <Divider />
                                <div className="horizontal-inputs" style={{ display: 'flex', alignItems: 'center', gap: '60px' }}>
                                <Form.Item label="Date of Birth">
                        <DatePicker
                            value={userData.dob}
                            onChange={(date) => setUserData({ ...userData, dob: date })}
                            disabled={!editMode} // Disable input field if not in edit mode
                        />
                    </Form.Item>
                    {/* Gender */}
                    <Form.Item label="Gender">
                        <Radio.Group
                            value={userData.gender}
                            onChange={(e) => handleInputChange({ target: { name: 'gender', value: e.target.value } })}
                            disabled={!editMode} // Disable input field if not in edit mode
                        >
                            <Radio value="male">Male</Radio>
                            <Radio value="female">Female</Radio>
                        </Radio.Group>
                    </Form.Item>
                                </div>
                                <Divider />
                                <div className="horizontal-inputs" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                <Form.Item label="Travel" style={{ marginRight: '20px', flex: 1 }}>
                                <Checkbox.Group style={{ width: '100%' }}>
                                <Checkbox value="bus" className="checkbox" disabled={!editMode}>Bus</Checkbox>
                                <Checkbox value="car" className="checkbox" disabled={!editMode}>Car</Checkbox>
                                <Checkbox value="walk" className="checkbox" disabled={!editMode}>Walk</Checkbox>
                                <Checkbox value="track" className="checkbox" disabled={!editMode}>Track</Checkbox>
                                </Checkbox.Group>
                                </Form.Item>
                                </div>
                                <div className="horizontal-inputs" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                <Form.Item label="Language" style={{ marginRight: '20px', flex: 1 }}>
                                <Select
                                defaultValue="english"
                                style={{ width: 780, borderColor: activeInput === 'language' ? 'red' : '#d9d9d9' }}
                                onFocus={() => setActiveInput('language')}
                                onBlur={handleInputBlur}
                                disabled={!editMode} // Disable input field if not in edit mode
                                >
                                <Option value="english">English</Option>
                                <Option value="spanish">Spanish</Option>
                                <Option value="french">French</Option>
                                </Select>
                                </Form.Item>
                                </div>
                                <Divider />
                                <div className="horizontal-inputs" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                <Form.Item label="Profile Image" style={{ marginRight: '20px', flex: 1 }}>
                                {selectedImage ? (
                                <div>
                                <Button onClick={handleRemoveButtonClick} type="link">Remove</Button>
                                <img src={URL.createObjectURL(selectedImage)} alt="Profile" style={{ width: '180px', height: '180px', borderRadius: '50%' }} />
                                </div>
                                ) : (
                                <Button onClick={handleUploadButtonClick} icon={<UploadOutlined />} className="upload-button" disabled={!editMode}>
                                Click here to Upload Profile Image
                                </Button>
                                )}
                                <input
                                ref={inputFileRef}
                                type="file"
                                style={{ display: 'none' }}
                                accept="image/*"
                                onChange={handleImageChange}
                                />
                                </Form.Item>
                                </div>
                                
                            
                               <div className="horizontal-inputs" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                                        <div style={{ marginRight: '20px' }}>
                                                            <h2>Location</h2>
                                                            <Form.Item label="Country" style={{ marginRight: '10px', marginTop: '34px' }}>
                                                                <Select defaultValue="Select Country" style={{ width: 230 }}>
                                                                    <Option value="usa">USA</Option>
                                                                    <Option value="uk">UK</Option>
                                                                    <Option value="canada">Canada</Option>
                                                                </Select>
                                                            </Form.Item>
                                                        </div>
                                                        <div style={{ marginRight: '20px', marginTop: '39px', marginLeft: '20px' }}>
                                                                <Form.Item label="State" style={{ marginBottom: 0 }}>
                                                                    <Input placeholder="Enter state" style={{ width: 230 }} />
                                                                </Form.Item>
                                                            </div>
                                                            <div>
                                                                <Form.Item label="City" style={{ marginRight: '0px', marginTop: '60px', marginLeft: '20px' }}>
                                                                    <Input placeholder="Enter city" style={{ width: 230 }} />
                                                                </Form.Item>
                                                            </div>
                                                        </div>
                                                        <div className="horizontal-inputs" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                                            <div style={{ marginRight: '20px' }}>
                                                                <h2>Change Password</h2>
                                                                <Form.Item label="Current Password" style={{ marginRight: '10px', marginTop: '34px' }}>
                                                                    <Input placeholder="Enter here" style={{ width: 230 }} />
                                    
                                    
                                                                    </Form.Item>
                            </div>
                            <div style={{ marginRight: '20px', marginTop: '39px', marginLeft: '20px' }}>
                                <Form.Item label="New Password" style={{ marginBottom: 0 }}>
                                    <Input placeholder="Enter here" style={{ width: 230 }} />
                                </Form.Item>
                            </div>
                            <div>
                                <Form.Item label="Confirm Password" style={{ marginRight: '0px', marginTop: '60px', marginLeft: '20px' }}>
                                    <Input placeholder="Enter here" style={{ width: 230 }} />
                                </Form.Item>
                            </div>
                        </div>

                        {renderButton()}

                    </Form>
                    <Divider />
                </Card>
            </div>
            <style jsx>{`

                .edit-profile-container{
                    margin-top:200px;
                }
                .menu-item {
                    cursor: pointer;
                }
                .menu-item:hover {
                    background-color: red;
                    color: white;
                    
                }
                .menu-item:hover .ant-list-item-meta-title a {
                    color: white !important;
                }
                .menu-item:hover .ant-list-item-meta-avatar {
                    color: white !important;
                }
                .menu-item a {
                    color: black; /* Default text color */
                }
                
                .menu-item.active {
                    background-color: red;
                    color: white; /* Text color when active */
                }
                
                .menu-item.active a {
                    color: white; /* Text color when active */
                }
                
                .menu-item a:hover {
                    color: white; /* Text color on hover */
                }
                
                .menu-item.active a:hover {
                    color: white; /* Text color on hover when active */
                }
                .horizontal-inputs {
                    width: 100%;
                }
                .checkbox input[type="checkbox"]:checked + span {
                    background-color: red;
                    color: white;
                    border: red;
                }
                .checkbox {
                    margin-right: 80px;
                }
                .upload-button {
                    height: 40px;
                    background-color: black; /* Red color */
                    color: white;
                    border-color: black; /* Red color */
                }

                .upload-button:hover {
                    background-color: #FF0000;
                    border-color: #FF0000;
                }

            `}</style>

        </div>
    );
}

export default Edit_Profile;
