import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Modal, Form, Container } from 'react-bootstrap';
import NavBar2 from './NavBar2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt,faEdit} from '@fortawesome/free-solid-svg-icons';


function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [editedUser, setEditedUser] = useState({});

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://curd-znxg.onrender.com/api/auth/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setEditedUser({ ...user });
    setShowEditModal(true);
  };

  const handleEditModalClose = () => {
    setShowEditModal(false);
  };
  const handleDelete = async (userId) => {
    try {
      console.log('Deleting user:', userId);
     const response =  await axios.delete(`https://curd-znxg.onrender.com/api/auth/delete/${userId}`);
  
  
      // Filter out the deleted user from the users state
      setUsers((prevUsers) =>
      prevUsers.filter((user) => user._id !== userId)
    );
  
      // Close the modal
      setShowEditModal(false);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };
  

  const handleEditProfile = async () => {
    try {
      
      const response = await axios.post(
        `https://curd-znxg.onrender.com/api/auth/update/${selectedUser._id}`,
        editedUser);
        // Update the users state with the updated user
    setUsers((prevUsers) =>
    prevUsers.map((user) =>
      user._id === selectedUser._id ? response.data.user : user
    )
  );

      setShowEditModal(false);
      fetchUsers();
    } catch (error) {
      console.error('Error editing profile:', error);
    }
  };

  return (
    <>
    <NavBar2/>
    {/* <Container className="container mt-5"> */}
    {/* <div className="container mt-5"> */}
      <h2>Manage Users</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Gender</th>
            <th>Address</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>{user.gender}</td>
              <td>{user.address}</td>
              <td>{user.city}</td>
              <td>
              <Button variant="primary" onClick={() => handleEditClick(user)}>
  <FontAwesomeIcon icon={faEdit} /> {/* Edit Icon */}
</Button>
{' '}
<Button variant="danger" onClick={() => handleDelete(user._id)}>
                  <FontAwesomeIcon icon={faTrashAlt} /> Delete
                </Button>

              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showEditModal} onHide={handleEditModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* Include form fields to edit user profile */}
            {/* For example, you can use Form.Group, Form.Label, Form.Control */}
            <Form.Group controlId="editName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={editedUser.name} // Populate with editedUser's data
          onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
        />

        
      </Form.Group>
      <Form.Group controlId="editName">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          name="email"
          disabled
          value={editedUser.email} // Populate with editedUser's data
          onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
        />
      </Form.Group>
      <Form.Group controlId="editName">
        <Form.Label>Mobile</Form.Label>
        <Form.Control
          type="number"
          name="mobile"
          value={editedUser.mobile} // Populate with editedUser's data
          onChange={(e) => setEditedUser({ ...editedUser, mobile: e.target.value })}
        />
      </Form.Group>
      <Form.Group controlId="editName">
        <Form.Label>Gender</Form.Label>
        <Form.Control
          type="text"
          name="gender"
          value={editedUser.gender} // Populate with editedUser's data
          onChange={(e) => setEditedUser({ ...editedUser, gender: e.target.value })}
        />
      </Form.Group>
      <Form.Group controlId="editName">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          name="address"
          value={editedUser.address} // Populate with editedUser's data
          onChange={(e) => setEditedUser({ ...editedUser, address: e.target.value })}
        />
      </Form.Group>

      <Form.Group controlId="editName">
        <Form.Label>City</Form.Label>
        <Form.Control
          type="text"
          name="city"
          value={editedUser.city} // Populate with editedUser's data
          onChange={(e) => setEditedUser({ ...editedUser, city: e.target.value })}
        />
      </Form.Group>

      


          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEditProfile}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    {/* </div> */}
    {/* </Container> */}
    </>
  );
}

export default ManageUsers;
