import { React , useState} from 'react';
import { 
  CAccordion,
  CAccordionBody,
  CAccordionItem,
  CAccordionHeader,
  CAvatar,
  CBadge, 
  CButton,
  CButtonGroup, 
  CCollapse, 
  CCard, 
  CCardBody, 
  CModal, 
  CModalBody, 
  CModalTitle, 
  CModalHeader, 
  CModalFooter, 
  CDropdown, 
  CDropdownToggle, 
  CDropdownHeader, 
  CDropdownDivider, 
  CDropdownItem, 
  CDropdownMenu 
} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import "./profile.css";



export default function Profile() {


        const [visibleA, setVisibleA] = useState(false)
        const [visibleB, setVisibleB] = useState(false)
        const [visibleModal, setVisibleModal] = useState(false)
        
          return (
            <div className="container">
              
              <div className="profile--container">
                <h1 className="header--main">MΞTA_face 👤</h1>
                <h2 className="profile--text">Danny_One</h2>
              <div className="profile--card">
              </div>
                    <div className="profile--text">
                    <p className="sm">Sometimes I do stuff online</p>
                    </div>
            </div>
        
                  {/* collections 
                  - be able to highlight a specific number or set of collections
                  - toggle the collections on and off
                  - point to the collections icon from opensea
                  - limit max collections to 6-8
        
                   */}
               <CButtonGroup role="group" aria-label="Basic example">
                   
                      <CDropdown variant="btn-group" alignment={{ md: 'end' }}>
                        { window.innerWidth > 700 ? (
                        <CDropdownToggle color="primary">📰 Collections (20)</CDropdownToggle>
                        ) : (
                          <CDropdownToggle color="primary">📰</CDropdownToggle>
                          )
                        }
                        <CDropdownMenu>
                          <CDropdownItem href="#">
                          
                            <CDropdownItem onClick={() => setVisibleModal(!visibleModal)}>Bubblegum Pandas</CDropdownItem>
                            <CModal visible={visibleModal} onClose={() => setVisibleModal(false)}>
                              <CModalHeader className="modal-background" onClose={() => setVisibleModal(false)}>
                                <CModalTitle>Bubblegum Pandas</CModalTitle>
                              </CModalHeader>
                              <CModalBody className="modal-background">
                                  <div className="collections--card--images"></div>
                                  <div className="collections--card--images"></div>
                                  <div className="collections--card--images"></div>
                                  <div className="collections--card--images"></div>
                                  <div className="collections--card--images"></div>
                                  <div className="collections--card--images"></div>
                              </CModalBody>
                              <CModalFooter className="modal-background">
                                <CButton color="primary" onClick={() => setVisibleModal(false)}>
                                  Close
                                </CButton>
                              </CModalFooter>
                            </CModal>
        
                          </CDropdownItem>
                                
                        </CDropdownMenu>
                      </CDropdown>
        
                      <CDropdown variant="btn-group" alignment={{ md: 'end' }}>
                        { window.innerWidth > 700 ? (
                        <CDropdownToggle color="primary">🏆 ShowCase (15)</CDropdownToggle>
                        ) : (
                          <CDropdownToggle color="primary">🏆</CDropdownToggle>
                          )
                        }
                        <CDropdownMenu>
                          <CDropdownItem href="#">
                          
                            <CDropdownItem onClick={() => setVisibleModal(!visibleModal)}>OtherGum Pandas</CDropdownItem>
                            <CModal visible={visibleModal} onClose={() => setVisibleModal(false)}>
                              <CModalHeader className="modal-background" onClose={() => setVisibleModal(false)}>
                                <CModalTitle>OtherGum Pandas</CModalTitle>
                              </CModalHeader>
                              <CModalBody className="modal-background">
                                  <div className="collections--card--images"></div>
                                  <div className="collections--card--images"></div>
                                  <div className="collections--card--images"></div>
                                  <div className="collections--card--images"></div>
                                  <div className="collections--card--images"></div>
                                  <div className="collections--card--images"></div>
                              </CModalBody>
                              <CModalFooter className="modal-background">
                                <CButton color="primary" onClick={() => setVisibleModal(false)}>
                                  Close
                                </CButton>
                              </CModalFooter>
                            </CModal>
        
                          </CDropdownItem>
                                
                        </CDropdownMenu>
                      </CDropdown>
        
                      <CDropdown variant="btn-group" alignment={{ md: 'end' }}>
                        { window.innerWidth > 700 ? (
                        <CDropdownToggle color="primary">💰 Storefront</CDropdownToggle>
                        ) : (
                          <CDropdownToggle color="primary">💰</CDropdownToggle>
                          )
                        }
                        <CDropdownMenu>
                          <CDropdownItem href="#">
                          
                            <CDropdownItem onClick={() => setVisibleModal(!visibleModal)}>
                            <CAvatar src="https://ik.imagekit.io/bayc/assets/ape3.png" onClick={() => setVisibleModal(!visibleModal)} size="xl">
                                <CModal visible={visibleModal} onClose={() => setVisibleModal(false)}>
                                    <CModalHeader className="modal-background" onClose={() => setVisibleModal(false)}>
                                    <CModalTitle>SellingGum Pandas</CModalTitle>
                                    </CModalHeader>
                                    <CModalBody className="modal-background">
                                        <div className="collections--card--images"></div>
                                        <div className="collections--card--images"></div>
                                        <div className="collections--card--images"></div>
                                        <div className="collections--card--images"></div>
                                        <div className="collections--card--images"></div>
                                        <div className="collections--card--images"></div>
                                    </CModalBody>
                                    <CModalFooter className="modal-background">
                                    <CButton color="primary" onClick={() => setVisibleModal(false)}>
                                        Close
                                    </CButton>
                                    </CModalFooter>
                                </CModal>
                            </CAvatar>
                            </CDropdownItem>
                            
                            <CModal visible={visibleModal} onClose={() => setVisibleModal(false)}>
                              <CModalHeader className="modal-background" onClose={() => setVisibleModal(false)}>
                                <CModalTitle>SellingGum Pandas</CModalTitle>
                              </CModalHeader>
                              <CModalBody className="modal-background">
                                  <div className="collections--card--images"></div>
                                  <div className="collections--card--images"></div>
                                  <div className="collections--card--images"></div>
                                  <div className="collections--card--images"></div>
                                  <div className="collections--card--images"></div>
                                  <div className="collections--card--images"></div>
                              </CModalBody>
                              <CModalFooter className="modal-background">
                                <CButton color="primary" onClick={() => setVisibleModal(false)}>
                                  Close
                                </CButton>
                              </CModalFooter>
                            </CModal>
        
                          </CDropdownItem>
                                
                        </CDropdownMenu>
                      </CDropdown>
        
        
                   </CButtonGroup>

                <div>
                    <h1>Collecton</h1>
                <CAvatar src="https://ik.imagekit.io/bayc/assets/ape3.png" onClick={() => setVisibleModal(!visibleModal)} size="xl">
                    <CModal visible={visibleModal} onClose={() => setVisibleModal(false)}>
                        <CModalHeader className="modal-background" onClose={() => setVisibleModal(false)}>
                        <CModalTitle>SellingGum Pandas</CModalTitle>
                        </CModalHeader>
                        <CModalBody className="modal-background">
                            <div className="collections--card--images"></div>
                            <div className="collections--card--images"></div>
                            <div className="collections--card--images"></div>
                            <div className="collections--card--images"></div>
                            <div className="collections--card--images"></div>
                            <div className="collections--card--images"></div>
                        </CModalBody>
                        <CModalFooter className="modal-background">
                        <CButton color="primary" onClick={() => setVisibleModal(false)}>
                            Close
                        </CButton>
                        </CModalFooter>
                    </CModal>
                </CAvatar>

                <CAvatar src="https://ik.imagekit.io/bayc/assets/ape3.png" size="xl"/>
                <CAvatar src="https://ik.imagekit.io/bayc/assets/ape1.png" size="xl"/>
                <CAvatar src="https://ik.imagekit.io/bayc/assets/ape2.png" size="xl"/>
                </div>

            <div>
                <CAccordion alwaysOpen>
                    <CAccordionItem>
                        <CAccordionHeader>
                        { window.innerWidth > 700 ? (
                            <CButton color="primary">📰 Collections (20)</CButton>
                            ) : (
                            <CButton color="primary">📰</CButton>
                            )
                            }
                        </CAccordionHeader>
                        <CAccordionBody>
                <CAvatar src="https://ik.imagekit.io/bayc/assets/ape3.png" onClick={() => setVisibleModal(!visibleModal)} size="xl">
                    <CModal visible={visibleModal} onClose={() => setVisibleModal(false)}>
                        <CModalHeader className="modal-background" onClose={() => setVisibleModal(false)}>
                        <CModalTitle>SellingGum Pandas</CModalTitle>
                        </CModalHeader>
                        <CModalBody className="modal-background">
                            <div className="collections--card--images"></div>
                            <div className="collections--card--images"></div>
                            <div className="collections--card--images"></div>
                            <div className="collections--card--images"></div>
                            <div className="collections--card--images"></div>
                            <div className="collections--card--images"></div>
                        </CModalBody>
                        <CModalFooter className="modal-background">
                        <CButton color="primary" onClick={() => setVisibleModal(false)}>
                            Close
                        </CButton>
                        </CModalFooter>
                    </CModal>
                </CAvatar>
                            <CAvatar src="https://ik.imagekit.io/bayc/assets/ape1.png" size="xl"/>
                            <CAvatar src="https://ik.imagekit.io/bayc/assets/ape2.png" size="xl"/>
                        </CAccordionBody>
                    </CAccordionItem>
                </CAccordion>
            </div> 
                   
        </div>
        
              
          );
        }