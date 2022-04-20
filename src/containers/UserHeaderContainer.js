import React, { useState } from "react";
import links from "../constants/routes/nav-links";
import Userlinks from "../constants/routes/user-nav-links";
import { HeaderWrapper, Banner, Jumbotron } from "../components";
import UserSideNavigationContainer from "./UserSideNavigationContainer";
import { AdvancedSearchContainer, SideNavigationContainer } from "./index";
import {ethers} from 'ethers'
import { Modal ,Button, ModalFooter } from "react-bootstrap";
const UserHeaderContainer = ({ bg, source }) => {
  const [sideNavShown, setSideNavShown] = useState(false);
  const [sideNavHidden, setSideNavHidden] = useState(true);
  const [fixed, setFixed] = useState(false);

  const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Wallet');

  const connectWalletHandler = () => {
		if (window.ethereum && window.ethereum.isMetaMask) {
			console.log('MetaMask Here!');

			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				accountChangedHandler(result[0]);
				setConnButtonText('Wallet Connected');
				getAccountBalance(result[0]);
			})
			.catch(error => {
				setErrorMessage(error.message);
			
			});

		} else {
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
	}

	// update account, will cause component re-render
	const accountChangedHandler = (newAccount) => {
		setDefaultAccount(newAccount);
		getAccountBalance(newAccount.toString());
	}

	const getAccountBalance = (account) => {
		window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
		.then(balance => {
			setUserBalance(ethers.utils.formatEther(balance));
		})
		.catch(error => {
			setErrorMessage(error.message);
		});
	};

	const chainChangedHandler = () => {
		// reload the page to avoid any errors with chain change mid use of application
		window.location.reload();
	}


	// listen for account changes
	window.ethereum.on('accountsChanged', accountChangedHandler);
	window.ethereum.on('chainChanged', chainChangedHandler);


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const ShowModal = () =>{
    handleShow()
  }

 //0xd9145CCE52D386f254917e481eB44e9943F39138

  const changeBackgroundColorAndPosition = () => {
    if (window.pageYOffset > 100) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  window.addEventListener("scroll", changeBackgroundColorAndPosition);

  const handleSideNavigation = () => {
    setSideNavHidden((prevState) => !prevState);
    setSideNavShown((prevState) => !prevState);
  };
  return (
    
    <Banner bg={bg} source={source}>
      <HeaderWrapper bg={bg} fixed={fixed}>
        <HeaderWrapper.Container>
          <HeaderWrapper.Title bg={bg}>
            <HeaderWrapper.Link bg={bg} fixed={fixed} to="/">
              Real Home
            </HeaderWrapper.Link>
          </HeaderWrapper.Title>
          <HeaderWrapper.LinksContainer>
            <HeaderWrapper.List links="links">
              {Userlinks.map((link) => (
                <HeaderWrapper.Item key={link.to}>
                  <HeaderWrapper.Anchor bg={bg} fixed={fixed} to={`${link.to}`}>
                    {link.name}
                  </HeaderWrapper.Anchor>
                </HeaderWrapper.Item>
              ))}
            </HeaderWrapper.List>
            
            <HeaderWrapper.List>
              <HeaderWrapper.Item>
                <HeaderWrapper.Anchor  onClick={ShowModal} special="true">
                  Wallet
                </HeaderWrapper.Anchor>
              </HeaderWrapper.Item>
            </HeaderWrapper.List>
           
            <HeaderWrapper.List side="side">
              <HeaderWrapper.Item>
                <HeaderWrapper.Button onClick={handleSideNavigation}>
                  <HeaderWrapper.Icon name="fa fa-bars" />
                </HeaderWrapper.Button>
              </HeaderWrapper.Item>
            </HeaderWrapper.List>
          </HeaderWrapper.LinksContainer>
        </HeaderWrapper.Container>
      </HeaderWrapper>
      {bg === "true" && (
        <Jumbotron>
          <Jumbotron.Left>
            <Jumbotron.Title>Find The Home You Deserve With Us</Jumbotron.Title>
            <Jumbotron.Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
              exercitationem.
            </Jumbotron.Text>
          </Jumbotron.Left>
          <Jumbotron.Right>
            <AdvancedSearchContainer />
            {/* <div className="card">
              <div className="card-header h3">
                    Advance Serach
              </div>
              <div className="card-body">
                 <div className="form-group my-3">
                   <label for="">Category</label>
                   <input type="text" name="category" className="form-control" placeholder="Category"/>
                 </div>
                 <div className="form-group my-3">
                  <input type="text" name="category" className="form-control" placeholder="Category"/>
                </div>
                <div className="form-group my-3">
                  <label for="">Price</label>
                  <input type="text" name="category" className="form-control" placeholder="Category"/>
                </div>
                <div className="form-group my-3">
                  <label for="">City</label>
                  <input type="text" name="category" className="form-control" placeholder="Category"/>
                </div>
              </div>
            </div>  */}
          </Jumbotron.Right>
        </Jumbotron>
      )}
      
      <Modal show={show} onHide={handleClose}  >
        <Modal.Header closeButton >
          <Modal.Title className="text-center" > MetaMask Wallet</Modal.Title>
        </Modal.Header>
        <Modal.Body >
			<div className='accountDisplay text-center my-3'>
				<h4>Wallet Address <br/> 
        <h5> {defaultAccount}</h5>   
        </h4>
			</div>
      <div className='accountDisplay text-center my-3'>
				<h4>Wallet Balance <br/> 
        <h5>  {userBalance}</h5>   
        </h4>
			</div>
			{errorMessage}
        </Modal.Body>
        <Modal.Footer>
        <Button onClick={connectWalletHandler}>{connButtonText}</Button>
        </Modal.Footer>
      </Modal>
     
      
      <UserSideNavigationContainer
        sideNavShown={sideNavShown}
        sideNavHidden={sideNavHidden}
        setSideNavHidden={setSideNavHidden}
        setSideNavShown={setSideNavShown}
      />
    </Banner>
  );
};

export default UserHeaderContainer;
