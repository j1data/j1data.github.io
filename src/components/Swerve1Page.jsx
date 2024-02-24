import React from 'react'
import HeroImage from '../assets/SwerveBotNoBack.png'
import HeroVid from '../assets/SparroMDOrbit.19.mp4'
import Components from '../assets/LabeledModuleList.png'
import DriveMotor from '../assets/SwerveDriveMotor.png'
import TurningMotor from '../assets/SwerveTurningMotor.png'
import BasePlate from '../assets/SwerveBasePlate.png'
import LazySusan from '../assets/SwerveLazySusan.png'
import LazySusan2 from '../assets/SwerveLazySusanUpClose.png'
import TurningGears from '../assets/SwerveTurningGears.png'
import PowerSystem from '../assets/SwervePowerSystem.png'
import WheelAxel from '../assets/SwerveWheelAxel.png'

const Swerve1Page = () => {
  return (
    <div name='swerve1' className='w-full h-full bg-[#0a192f]'>
        
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 justify-center pt-24 text-gray-300 border-gray-300 shadow-lg shadow-[#040c16]'>
            <div className='text-center'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-gray-300'>3D Printed Swerve Drive Train</p>
            </div>
            <div className='pb-8 text-center'>
                <p className='text-2xl pt-4 '>An experimental drive system that allows for individual control of tire speed and direction.</p>
            </div>

            <div style={{width: '60%', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} className=' pb-8'>
                <img src={HeroImage} alt="HeroImage" />
            </div>

            <div className='text-center'>
                <p className='text-2xl font-bold inline border-b-4 text-gray-300 border-gray-300'>Overview</p>
            </div>
            <div className=''>
                <p className='text-xl pt-4 pb-8'>The objective of this project was to explore how swerve drive trains work, 
                the manufacturing methods needed to fabricate them, and to build a test platform to code different control algorithms.
                The Swerve drive train is a sub-type of drive train used on vehicles. This system is
                not limited to vehicle size - be it a large vehicle designed for transporting cargo such as
                humans like NASA’s MRV(Modular Robotic Vehicle), or smaller scale vehicles
                such as robots seen in the FIRST Robotics Competition. The advantage of swerve drive
                is that is gives the vehicle the ability to individually control each wheel on the chassis in
                not only speed but also direction. This level of control is achieved by using two motors
                for each swerve module, allowing for one motor to control the speed of the wheel and the
                other motor to control the direction the tire is facing. While most drive trains typically
                have 4 wheels, the use of these swerve modules is not limited to a specific number of
                wheels.
                
                </p>
            </div>

            <div className='text-center '>
                <p className='text-2xl font-bold inline border-b-4 text-gray-300 border-gray-300'>Solution</p>
            </div>
            <div className=''>
                <p className='text-xl pt-4 pb-8'>The solution I came up with was a small form factor design optimized to leverage 3D printing
                fabrication methods. The design used a combination of off the shelf parts and 3D printed structural components. 
                This kept the cost of building this prototype affordable. The robot frame is 1 ft by 2 ft and with electronics it weighs around 30 lbs.
                The wheels are geared for competition conditions bringing the no-load ground speed of the robot to 18 ft/s, and the wheels can turn their
                direction at a no-load rate of 90 rpm. </p>
            </div>

            <div className='text-center pb-4'>
                <p className='text-2xl font-bold inline border-b-4 text-gray-300 border-gray-300'>Components Overview</p>
            </div>
            <div style={{width: '80%', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} className='pb-12'>
                <img src={Components} alt="Components"/>
            </div>

            <div style={{width: '40%', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} className=''>
                <img src={DriveMotor} alt="Components"/>
            </div>
            <div className=''>
                <p className='text-2xl pt-4'>Drive Motor</p>
            </div>
            <div className='pb-8'>
                <p className='text-xl pt-4'>The drive motor is a high rpm motor designed for speed and torque.
                The Drive motor shown is a 2.5inch CIM motor sold by Andymark. 
                This motor has a no-load rpm of 5310 and after going through the gearing that is on this specific design, 
                the wheel will have a no-load speed of 18.1 ft per second.
                </p>
            </div>

            <div style={{width: '40%', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} className=''>
                <img src={TurningMotor} alt="TurningMotor"/>
            </div>
            <div className=''>
                <p className='text-2xl pt-4'>Turning Motor</p>
            </div>
            <div className='pb-8'>
                <p className='text-xl pt-4'>The turning motor is a low rpm motor designed for high 
                torque applications such as turning the wheel in high friction environments. The turning motor
                is connected to the lazy susan and an encoder. This design is
                using a PG71 motor with a max rpm of 90.
                </p>
            </div>

            <div style={{width: '40%', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} className=''>
                <img src={BasePlate} alt="BasePlate"/>
            </div>
            <div className=''>
                <p className='text-2xl pt-4'>Base Plate</p>
            </div>
            <div className='pb-8'>
                <p className='text-xl pt-4'>The base plate, also known as the mounting plate, is the portion of
                the module that connects the entire module to the frame. This plate is responsible for
                connecting the motors and the wheel, as well as giving stability to the lazy susan. The
                base plate takes most of the forces during the movement of the vehicle.
                </p>
            </div>

            <div style={{width: '40%'}} className='flex mx-auto justify-center'>
                <img src={LazySusan} alt="Lazy Susan in model"/>
                <img src={LazySusan2} alt="Lazy Susan up close"/>
            </div>
            <div className=''>
                <p className='text-2xl pt-4'>Lazy Susan</p>
            </div>
            <div className='pb-8'>
                <p className='text-xl pt-4'>The lazy susan is the most important part of the entire module, for it
                is responsible for stabilizing the wheel and allowing two separate motors to act on the
                same wheel. The lazy susan is made in three parts – a bottom, a top, and a stabilizing
                plate; with ball bearings sandwiched between the top and bottom. The bottom portion
                is shaped like a gear and it attaches to the frame where the wheel is held. This portion
                is driven by the turning motor. Ball bearings are placed in a raceway carved into this
                bottom piece and the top piece is placed on top with it’s matching raceway aligning. A
                stabilizing plate is placed on top of the top piece and is fastened to the bottom piece
                with long bolts. This stabilizing piece holds the top piece on while still allowing the top
                and bottom to rotate freely of each other. The top piece is then fastened to the base
                plate. The lazy susan is hollow in the center allowing for the drive shaft to pass through
                the lazy susan without interference.
                </p>
            </div>

            <div style={{width: '40%', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} className=''>
                <img src={TurningGears} alt="Turning Gears"/>
            </div>
            <div className=''>
                <p className='text-2xl pt-4'>Gears Responsible for Turning</p>
            </div>
            <div className='pb-8'>
                <p className='text-xl pt-4'>The turning gears are responsible for the rotation of the module. The
                gears, one of which is built into the lazy susan, are a one-to-one ratio. The gear ratio can
                be altered depending on the desired response of the module. Typically an overall low
                rpm value is used to create more precise control in the directing of the module’s wheels.
                </p>
            </div>

            <div style={{width: '40%', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} className=''>
                <img src={PowerSystem} alt="Driven Power System"/>
            </div>
            <div className=''>
                <p className='text-2xl pt-4'>Driven Power System</p>
            </div>
            <div className='pb-8'>
                <p className='text-xl pt-4'>The drive system is made up of gears, sprocket, and steel shafts.The
                drive motor turns the two gears on top of the base plate which are connected to the
                drive shaft. The power from the drive motor is translated through the lazy susan via
                the vertical drive shaft which is then converted to the horizontal drive shaft via the 90
                degree bevel gears. The horizontal drive shaft and wheel are connected via a pair of
                sprockets utilizing #25 roller chain.
                </p>
            </div>

            <div style={{width: '40%', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} className=''>
                <img src={WheelAxel} alt="Wheel and Axel"/>
            </div>
            <div className=''>
                <p className='text-2xl pt-4'>Wheel and Axel</p>
            </div>
            <div className='pb-8'>
                <p className='text-xl pt-4'>The wheel used in this design is an Andymark 4 inch diameter wheel.
                A bolt is used as the axle in this module because the driven sprocket is attached directly
                to the wheel’s hub. This type of axle is called a dead axle and it allows for cost reduction
                and reducing potential friction by having the mounting points of the axle
                not rotate.
                </p>
            </div>

            <div className='pb-24'></div>
        </div>
    </div>
  )
}

export default Swerve1Page