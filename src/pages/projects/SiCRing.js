import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";
import ringProgression from "../../assets/images/SiC_Ring/RingProgression.jpg";
import blankDrilling from "../../assets/images/SiC_Ring/blank_drilling.gif";
import roughBlank from "../../assets/images/SiC_Ring/Rough_blank.jpg";
import sleeveJig from "../../assets/images/SiC_Ring/Sleeve_jig.jpg";
import grippedExternalRing from "../../assets/images/SiC_Ring/Gripped_externalring.jpg";
import explodedRingholdJig from "../../assets/images/SiC_Ring/Exploded_ringhold_jig.jpg";
import grindingExternalGif from "../../assets/images/SiC_Ring/Grinding_external_gif.gif";
import grindingRadii from "../../assets/images/SiC_Ring/Grinding_radii.jpg";
import roundedRing from "../../assets/images/SiC_Ring/Rounded_ring.jpg";
import grindingJig11 from "../../assets/images/SiC_Ring/Grinding_jig11.jpg";
import grindingJig12 from "../../assets/images/SiC_Ring/Grinding_jig12.jpg";
import millFaceting from "../../assets/images/SiC_Ring/Mill_faceting.jpg";
import finishedRing from "../../assets/images/SiC_Ring/Finished_ring.jpg";

const SiCRing = () => {
  const title = "Silicon Carbide Ring - adventures in diamond grinding with custom tooling";
  const description = "Creating the hardest ring in the world through precision machining and diamond grinding";

  return (
    <HelmetProvider>
      <Container className="Project-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{title} | {meta.title}</title>
          <meta name="description" content={description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">{title}</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row>
          <Col lg="12">
            <div className="project-content">
              <p>I had some scrap SSiC plate (pressureless sintered silicon carbide) lying around, and the intrusive thought struck: I should machine something from it. Thus began my hardest project so far (pun intended). I liked the sound of creating the hardest ring in the world.</p>
              
              <p>I wanted something with at least moderate geometric complexity, ideally with an embedded NFC chip. Since I had access to a benchtop lapping grinder (NEED TO REVIEW NAME), I figured adding external facets would be fairly straightforward. After some CAD experiments, I settled on five partial-face facets (hexagons = bestagons) with large external fillets.</p>
              
              <p>Starting from an 11–12 mm thick SiC plate, the order of operations went as follows:</p>
              
              <div className="mb-4">
                <img 
                  src={ringProgression}
                  alt="Ring progression from blank to finished"
                  className="img-fluid"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '400px',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                />
                <p style={{textAlign: 'center'}}><em>Starting from a blank (left), adding outer fillets (middle) and facets (right).</em></p>
              </div>
              
              <p>Firstly, the blank drilling. This was by far the most arduous part of the project. The diamond bits dulled almost instantly—probably not surprising given my AliExpress sourcing. The wear likely caused the external chipping at the end of the outer cut; fortunately, it wasn't deep enough to be visible after the later facing step.</p>
              
              <p>The setup was very ad-hoc: a laser-cut acrylic coolant basin and plate, plus a simple diaphragm pump to flood the tool. Keeping diamonds cool is critical, since despite the saying, they aren't forever when exposed to thermal shock and high heat. By keeping the plate clamped, I could maintain reasonably aligned inner and outer circular profiles. However, due to chipping and rapid tool wear, the outer surfaces ended up tapered.</p>
              
              <div className="mb-4">
                <img 
                  src={blankDrilling}
                  alt="Drilling out inner hole"
                  className="img-fluid"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '400px',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                />
                <p style={{textAlign: 'center'}}><em>Drilling out inner hole with small coring diamond bit.</em></p>
              </div>
              
              <div className="mb-4">
                <img 
                  src={roughBlank}
                  alt="Rough ring blank"
                  className="img-fluid"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '400px',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                />
                <p style={{textAlign: 'center'}}><em>Rough ring blank after removal with large coring diamond bit.</em></p>
              </div>
              
              <p>For the turning operations, I picked up a surprisingly good AliExpress diamond die grinder bit. I then milled a steel tool holder and aluminium clamps to mount my die grinder on the lathe toolpost. Spinning both the tool and the workpiece reduced cutting forces and distributed wear more evenly. This was particularly important, since ceramics tend to fracture explosively under stress—especially cheaper materials like my SiC plate. My strategy was low workpiece RPM and high tool RPM.</p>
              
              <p>To handle the stiffness and brittleness of SiC, I gripped the ring blank in the lathe with a 3D-printed plastic sleeve that matched the external taper from the drilling step. While the thickness wasn't completely uniform, the PLA was flexible enough that the jaws could center the piece fairly well.</p>
              
              <div className="mb-4">
                <img 
                  src={sleeveJig}
                  alt="External gripping sleeve"
                  className="img-fluid"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '400px',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                />
                <p style={{textAlign: 'center'}}><em>External gripping sleeve with slots for parallels.</em></p>
              </div>
              
              <p>Using parallels as a starting datum, I faced one surface, flipped the piece, and faced again. Then I carefully bored the inner diameter, leaving two flat, parallel faces perpendicular to the bore axis.</p>
              
              <div className="mb-4">
                <img 
                  src={grippedExternalRing}
                  alt="Ring getting squared up"
                  className="img-fluid"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '400px',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                />
                <p style={{textAlign: 'center'}}><em>Getting ring squared up after the first facing job.</em></p>
              </div>
              
              <p>With this consistency established, I moved on to the external (circumferential) turning operations. For these, I machined an aluminium clamping jig; this compressed a tapered plastic sleeve into the ring's inner bore, pressing the ring against a flat shoulder. Thanks to the perpendicularity established earlier, this ensured the inner and outer (circumferential) surfaces would stay parallel. I also drilled and tapped an M8 hex bolt into the back of the aluminum jig, which later served as an alignment point for facet grinding.</p>
              
              <div className="mb-4">
                <img 
                  src={explodedRingholdJig}
                  alt="Disassembled ring inner clamping jig"
                  className="img-fluid"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '400px',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                />
                <p style={{textAlign: 'center'}}><em>Disassembled ring inner clamping jig, showing compression bolt, plastic compression sleeve, and aluminum tapered rod with locating shoulder.</em></p>
              </div>
              
              <p>It took a few iterations to perfect the printed sleeve, but once done it worked reliably. Axial centering on the jig wasn't flawless, but it was more than sufficient for my needs. On to grinding!</p>
              
              <div className="mb-4">
                <img 
                  src={grindingExternalGif}
                  alt="External grinding process"
                  className="img-fluid"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '400px',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                />
              </div>
              
              <p>For the fillets, I found another bargain diamond bit (yes, from AliExpress again). To my surprise, things were turning out far better than expected.</p>
              
              <div className="mb-4">
                <img 
                  src={grindingRadii}
                  alt="Lining up cornering bit"
                  className="img-fluid"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '400px',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                />
                <p style={{textAlign: 'center'}}><em>Lining up cornering bit with workpiece.</em></p>
              </div>
              
              <div className="mb-4">
                <img 
                  src={roundedRing}
                  alt="Ring after filleting"
                  className="img-fluid"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '400px',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                />
                <p style={{textAlign: 'center'}}><em>Ring after boring, facing and filleting.</em></p>
              </div>
              
              <p>The last step was grinding the facets. At the start, I'd planned to use the desktop lapping grinder at work, and went as far as machining a steel fixture that clamped the hex bolt into a slot for alignment. The fixture mounted on the grinder plate, which pressed against a spinning diamond disk.</p>
              
              <div className="mb-4">
                <img 
                  src={grindingJig11}
                  alt="Ring mounted in facet grinding jig"
                  className="img-fluid"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '400px',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                />
                <p style={{textAlign: 'center'}}><em>Ring mounted in facet grinding jig.</em></p>
              </div>
              
              <div className="mb-4">
                <img 
                  src={grindingJig12}
                  alt="Grinding jig mounted on lapping plate"
                  className="img-fluid"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '400px',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                />
                <p style={{textAlign: 'center'}}><em>Grinding jig mounted on the lapping plate.</em></p>
              </div>
              
              <p>But during testing, I was disappointed with the jig's rigidity and alignment. It allowed deflection, which rounded the facets under cutting loads—which were high when grinding an entire surface at once like on a grinding disk.</p>
              
              <p>This roadblock, like many, made me pause and reconsider. That's when I realized I could simply use the cylindrical grinding bit (originally bought for the lathe) in the mill, clamping the hex head in the vice for the same datuming effect I'd over-engineered into the steel fixture.</p>
              
              <div className="mb-4">
                <img 
                  src={millFaceting}
                  alt="Ring with inner holding jig clamped to the mill"
                  className="img-fluid"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '400px',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                />
                <p style={{textAlign: 'center'}}><em>Ring with inner holding jig clamped to the mill by the rear/bottom hex bolt.</em></p>
              </div>
              
              <p>This worked well, though it was tough on the tool. The mill's relatively low RPM meant the bit wore down quickly. In fact, I ground the diamonds completely off the tip during the final cut, which caused some rapid heating and burning.</p>
              
              <p>Despite that, the final result was deeply satisfying.</p>
              
              <div className="mb-4">
                <img 
                  src={finishedRing}
                  alt="Finished silicon carbide ring"
                  className="img-fluid"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '400px',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

export default SiCRing;
