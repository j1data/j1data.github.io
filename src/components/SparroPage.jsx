import React from 'react'
import HeroImage from '../assets/MD_ISO_Render3.png'
import HeroVid from '../assets/SparroMDOrbit.19.mp4'
import Dimen from '../assets/SparroDimensioned.png'
import StructM from '../assets/SparroStructuresM.png'
import StructD from '../assets/SparroStructuresD.png'
import ElectM from '../assets/SparroElectronicsM.png'
import ElectD from '../assets/SparroElectronicsD.png'
import ConnectM from '../assets/SparroConnectionsM.png'
import ConnectD from '../assets/SparroConnectionsD.png'
import Stowage from '../assets/SparroStorage.png'
import Proto from '../assets/SparroPrototype.png'
import MFrame from '../assets/MothershipFrame091523.png'
import Deploy from '../assets/SparroDeployment.png'

const SparroPage = () => {
  return (
    <div name='sparro' className='w-full h-full bg-[#0a192f]'>
        
        {/* Container */}
        <div className='grid max-w-[1000px] mx-auto px-8 justify-center pt-24 text-gray-300 border-gray-300 shadow-lg shadow-[#040c16]'>
            <div className='text-center'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-gray-300'>S.P.A.R.R.O. - A Senior Design Project</p>
            </div>
            <div className='pb-8 text-center'>
                <p className='text-2xl pt-4 '>3 small UAV's working in concert to conduct payload delivery missions.</p>
            </div>

            <div style={{width: '80%', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} className='pb-8'>
                <img src={HeroImage} alt="HeroImage" />
            </div>

            <div className='text-center'>
                <p className='text-2xl font-bold inline border-b-4 text-gray-300 border-gray-300'>Objective</p>
            </div>
            <div className=''>
                <p className='text-xl pt-4'>The primary aim of this project was to participate in a simulated contract competition for NATO, 
                focusing on the design and construction of three small unmanned aerial vehicles (UAVs) tailored for executing a payload delivery mission within contested airspace.
                The envisioned system comprised three drones, with the main craft weighing 10 pounds, accompanied by two smaller drones weighing 1 pound each, 
                each affixed to the larger craft. 
                Tasked with navigating to the contested airspace, the mission involved deploying the two smaller drones to autonomously fly to a destination over two miles away,
                culminating in the delivery of a 1-ounce payload for each small drone.</p>
                <p className='text-xl pt-4 pb-8'>Per the mission specifications, it was mandated that the smaller drones deploy autonomously at altitude and independently of each other. 
                The larger drone was required to be recoverable, returning to its point of origin, while the smaller drones were designated as expendable assets. 
                Furthermore, the larger drone needed to demonstrate a range to release capability extending up to 7 miles, coupled with a 15-minute loiter time. 
                Equally imperative was the requirement for the smaller drones to exhibit stable flight characteristics over a range exceeding 2 miles. 
                Additionally, all components were to be accommodated within a compact 60" x 50" x 20" container, with assembly and readiness for flight achievable within a timeframe of 10 minutes.
                </p>
            </div>

            <div className='text-center '>
                <p className='text-2xl font-bold inline border-b-4 text-gray-300 border-gray-300'>Solution</p>
            </div>
            <div style={{width: '80%', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} className=''>
                <img src={Dimen} alt="Dimensioned Top Down View" />
            </div>
            <div className=''>
                <p className='text-xl pt-4'>Following 8 months of development, our design not only met but surpassed expectations, leaving our clients thoroughly impressed. 
                Dubbed the S.P.A.R.R.O. system by our team, it seamlessly fulfilled all specified requirements and even exceeded certain benchmarks. 
                The mothership, weighing in at 10 pounds, demonstrated remarkable versatility, effortlessly accommodating the carriage of the two daughterships, each weighing a pound.
                Operating with precision, the mothership exhibited minimal pilot intervention, executing take-offs, flights, and landings with seamless efficiency. 
                Boasting a wingspan of 6.6 feet and measuring just over 4 feet in length, the mothership surpassed initial projections, extending its loiter time by an additional 5 minutes and expanding its overall range by an impressive 8 miles.</p>
                <p className='text-xl pt-4 pb-8'>The daughterships similarly surpassed expectations, showcasing an impressive capability to fly for distances of up to 6 miles to reach their final destination. 
                Moreover, they were engineered for optional recoverability, featuring a modular design that facilitated easy replacement of damaged components and enabled swift assembly of additional daughterships in the field for successive missions. 
                This adaptability and resilience ensured the daughtership's readiness for a diverse range of operational scenarios, further enhancing the overall effectiveness of the S.P.A.R.R.O. system.</p>
            </div>

            <div className='text-center '>
                <p className='text-2xl font-bold inline border-b-4 text-gray-300 border-gray-300'>Components Overview</p>
            </div>
            <div style={{width: '100%', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} className=''>
                <img src={StructM} alt="Mothership Structures"/>
            </div>
            <div className=''>
                <p className='text-2xl pt-4'>Mothership Structural Components</p>
            </div>
            <div className='pb-8'>
                <p className='text-xl pt-4'> 
                    The structural components supporting flight loads in the Mothership primarily consist of carbon fiber rods, visually identified in green. 
                    Two spars span the entire length of the wings, interconnected through two fuselage-mounted ferrules, depicted in purple. 
                    This design configuration ensures ample wing strength to meet performance requirements. 
                    Additionally, a carbon fiber boom extends from the motor to the empennage, effectively managing vertical and lateral moments exerted by the empennage.
                    Torque forces originating from the motor and propeller are absorbed by a 3D printed motor mount and the boom. 
                    Furthermore, support for the empennage is provided by a 3D printed adapter housing two nylon rods inserted into the horizontal and vertical stabilizers. 
                    Ground interaction loads during takeoff, landing, and taxiing are managed by the tail-dragger landing gear configuration. 
                    Notably, the front landing gear brackets, fabricated from carbon fiber and colored yellow, are securely fastened to a reinforced section of the inner lite-ply structure using bolts and nuts. 
                    Meanwhile, the aluminum aft landing gear is affixed to the underside of the empennage adapter.
                </p>
            </div>

            <div style={{width: '100%', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} className=''>
                <img src={MFrame} alt="Mothership Fuselage Structure"/>
            </div>
            <div className=''>
                <p className='text-2xl pt-4'>Mothership Fuselage Structure</p>
            </div>
            <div className='pb-8'>
                <p className='text-xl pt-4'>
                    A closer look at the underlying structure of the mothership's lite-ply fuselage.
                    This structure was designed to house the electronics and provide a mounting point for the wings and landing gear.
                    The structure is optimized to be manufactured using laser cutting for efficiency and precision.
                </p>
            </div>

            <div style={{width: '100%', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} className=''>
                <img src={StructD} alt="Daughtership Structures"/>
            </div>
            <div className=''>
                <p className='text-2xl pt-4'>Daughtership Structural Components</p>
            </div>
            <div className='pb-8'>
                <p className='text-xl pt-4'>
                Similar to the Mothership, the daughtership also incorporates a central carbon-fiber spar, 
                serving as a core support structure to manage the moment forces generated by the empennage. 
                Additionally, mirroring the design approach, the daughtership features a custom-printed bracket 
                to secure and connect the horizontal and vertical stabilizers to the central tube, 
                along with a custom-printed motor mount at the nose to handle motor torque forces and ensure a robust connection to the aircraft. 
                Unlike the Mothership, however, spars are not utilized in the daughtership's wings due to its lightweight nature. 
                Instead, the wings rely on a single layer of fiberglass coating, a configuration that testing confirmed 
                to be more than sufficient for flight under design conditions. 
                Notably, given its disposable nature and launch mechanism from the mothership, the daughtership is devoid of landing gear. 
                To ensure secure attachment between the daughtership and the mothership, 
                stainless steel bolts and nuts are employed to fasten the interface to the central carbon fiber spar, 
                mitigating the risk of pre-release flight loads causing shearing or tearing of the connection.
                </p>
            </div>

            <div style={{width: '100%', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} className=''>
                <img src={ConnectM} alt="Mothership Connection Points"/>
            </div>
            <div className=''>
                <p className='text-2xl pt-4'>Mothership Connection Points</p>
            </div>
            <div className='pb-8'>
                <p className='text-xl pt-4'>
                    From nose to tail, the motor is secured to the 3D printed motor mount with four bolts and nuts, 
                    and the motor mount is in turn secured into the central carbon fiber spar with a single bolt and nut. 
                    The wings are designed to come off of the aircraft for easy and fast assembly and disassembly, 
                    accomplished by the use of four threaded nylon rods embedded in the wings, 
                    and nylon wing nuts that are threaded onto the rods from the inside of the lite-ply structure to securely hold the wings in place. 
                    The light ply structure is secured to the central carbon fiber spar with three bolts and wing nuts as well, 
                    making the whole assembly secure, yet easy to remove for maintenance or repair if necessary. 
                    The horizontal and vertical stabilizers are secured to the 3d printed adapter by inserting 
                    the nylon rods that are in the adapter into pre-drilled holes in the stabilizer and sliding the stabilizer up to the adapter, 
                    where the adapter tab will fit into a notch in the stabilizer and a screw is put through both the stabilizer 
                    and the adapter to hold them together.

                </p>
            </div>

            <div style={{width: '100%', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} className=''>
                <img src={ConnectD} alt="Daughtership Connection Points"/>
            </div>
            <div className=''>
                <p className='text-2xl pt-4'>Daughtership Connection Points</p>
            </div>
            <div className='pb-8'>
                <p className='text-xl pt-4'>
                    Starting at the nose, the daughtership's motor is connected to the motor mount, 
                    and the motor mount is then connected to the central carbon fiber spar with a bolt and nut. 
                    The clamshells are held together with two sets of small magnets that are inset into the foam and guided into place by pegs. 
                    The drop mechanism interface block on the spine of the daughtership is held in place by two bolts 
                    that run from the bottom of the central spar, through the wing, and into 3D printed block. 
                    The empennage is mounted to the 3d printed adapter using studs that are inserted through the stabilzier and welded to the adapter. 
                    And the adapter is then secured to the central tube with a bolt and nut.

                </p>
            </div>

            <div style={{width: '100%', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} className=''>
                <img src={Deploy} alt="Deployment Mechanism"/>
            </div>
            <div className=''>
                <p className='text-2xl pt-4'>Deployment Mechanism</p>
            </div>
            <div className='pb-8'>
                <p className='text-xl pt-4'>
                    The daughterships are attached to the mothership using custom designed and 3D printed pylons. These pylons house strong 
                    neodynium magnets that hold the daughterships in place until they are ready to be deployed. 
                    When the command is sent to release the daughterships, the servo in the deployment mechanism is actuated seperating the magnet in the pylon
                    with the magnet attached to the daughtership, allowing the daughtership to freefall away from the mothership to begin its flight to the target.
                </p>
            </div>

            <div style={{width: '100%', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} className=''>
                <img src={ElectM} alt="Mothership Electronics"/>
            </div>
            <div className=''>
                <p className='text-2xl pt-4'>Mothership Electronics</p>
            </div>
            <div className='pb-8'>
                <p className='text-xl pt-4'>
                    The mothership's electronics are housed inside the fuselage structure and are composed of 4 main components.
                    The battery, reciever, autopilot, and ESC. The back portion of the fuselage is removed and the top flap is raised to access the electronics.
                </p>
            </div>

            <div style={{width: '100%', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} className=''>
                <img src={ElectD} alt="Daughtership Electronics"/>
            </div>
            <div className=''>
                <p className='text-2xl pt-4'>Daughtership Electronics</p>
            </div>
            <div className='pb-8'>
                <p className='text-xl pt-4'>
                    The daughtership's electronics are housed inside the fuselage structure and are composed of 4 main components.
                    The battery, reciever, autopilot, and ESC. Inside this space the 1 oz payload is aditionally held.
                    The clamshell fuselage is seperated to access the electronics, payload, and servos on the underside of the electronics board.

                </p>
            </div>

            <div style={{width: '100%', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} className=''>
                <img src={Proto} alt="Final Prototype"/>
            </div>
            <div className=''>
                <p className='text-2xl pt-4'>Final Prototype</p>
            </div>
            <div className='pb-8'>
                <p className='text-xl pt-4'>
                    
                </p>
            </div>

            <div style={{width: '100%', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} className=''>
                <img src={Stowage} alt="Stowage Configuration"/>
            </div>
            <div className=''>
                <p className='text-2xl pt-4'>Stowage Configuration</p>
            </div>
            <div className='pb-8'>
                <p className='text-xl pt-4'>
                    The design was required to fit within a 60" x 50" x 20" container, with assembly and readiness for flight achievable within a timeframe of 10 minutes.
                    The mothership and daughterships are stowed in a compact configuration to fit within a little less than 50% of the container space.
                    The remaining space can be used for spare hardware, or other prefabrated daughterhships for successive missions. This design was able
                    to be assembled in just over 2 minutes.
                </p>
            </div>
        
            <div className='pb-24'></div>
        </div>
    </div>
  )
}

export default SparroPage