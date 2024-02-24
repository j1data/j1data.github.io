import React from 'react'
import HeroImage from '../assets/JoystickNoBack.png'
import ComponentCallout from '../assets/JoystickComponentCallout.png'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const JoystickPage = () => {
    const codeString = `
    /*
    * Universal Controller
    * Integrates 3-axis joystick and 3 tactile buttons
    * Justin Pullman
    * September 20, 2023
    */
    
    #include "Joystick.h"
    
    Joystick_ Joystick;
    
    void setup() {
      pinMode(1, INPUT_PULLUP); //Button inputs
      pinMode(2, INPUT_PULLUP);
      pinMode(3, INPUT_PULLUP);
      pinMode(A3, INPUT_PULLUP); //Joystick inputs
      pinMode(A2, INPUT_PULLUP);
      pinMode(A1, INPUT_PULLUP);
      pinMode(A0, INPUT_PULLUP);
    
      Joystick.begin();
      
      Joystick.setZAxisRange(-100,100); //Set range of each joystick axis
      Joystick.setThrottleRange(0,100);
      Joystick.setXAxisRange(-100,100);
      Joystick.setYAxisRange(-100,100);
    }
    
    int pinList[3] = {1,2,3}; //Keeping track of button input pins
    int lastButtonState[3] = {0,0,0}; //To keep track of button state
    
    void loop() {
    
      float zAxisValue0 = float(analogRead(A2)-537)/500; //reading in and scaling the input value
      if(zAxisValue0 >= 0.97) zAxisValue0 = 1; //dead zones
      else if(zAxisValue0 <= -0.99) zAxisValue0 = -1;
      else if(zAxisValue0 >= -0.01 and zAxisValue0 <= 0.01) zAxisValue0 = 0;
      Joystick.setZAxis(zAxisValue0*100.0); //setting the tuned value
    
      float throttleValue = float((analogRead(A3)-15))/1000; //reading in and scaling the input value
      if(throttleValue > .99) throttleValue = 1; //dead zones
      if(throttleValue <= 0.01 ) throttleValue = 0;
      Joystick.setThrottle(throttleValue*100.0); v
      
      float xAxisValue = float(analogRead(A1)-549)/320; //reading in and scaling the input value
      if(xAxisValue >= 0.97) xAxisValue = 1; //dead zones
      if(xAxisValue <= -0.99) xAxisValue = -1;
      if(xAxisValue >= -0.05 and xAxisValue <= 0.05) xAxisValue = 0;
      Joystick.setXAxis(xAxisValue*100.0); //setting the tuned value
    
      float yAxisValue = float(analogRead(A0)-154-390)/370; //reading in and scaling the input value
      if(yAxisValue >= 0.99) yAxisValue = 1; //dead zones
      if(yAxisValue <= -0.99) yAxisValue = -1;
      if(yAxisValue >= -0.03 and yAxisValue <= 0.03) yAxisValue = 0;
      Joystick.setYAxis(yAxisValue*100.0); //setting the tuned value
    
      for(int i=0; i < sizeof(pinList); i++){ //Ensures the correct state when the buttons are pressed
        int currentButtonState = !digitalRead(pinList[i]);
        if (currentButtonState != lastButtonState[i]){
            Joystick.setButton(i, currentButtonState);
            lastButtonState[i] = currentButtonState;
        }
      }
      delay(10); //wait for the system to keep up, 10ms. Without this the program crashes. 
    }
     `

  return (
    <div name='joystick' className='w-full h-full bg-[#0a192f]'>
        
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 justify-center pt-24 text-gray-300 border-gray-300 shadow-lg shadow-[#040c16]'>
            <div className='text-center'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-gray-300'>Universal Joystick Controller</p>
            </div>
            <div className='pb-8 text-center'>
                <p className='text-2xl pt-4 '>A controller with a 3-axis joystick and 3 programmable buttons.</p>
            </div>

            <div style={{width: '60%', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} className=' pb-8'>
                <img src={HeroImage} alt="HeroImage" />
            </div>

            <div className='text-center'>
                <p className='text-2xl font-bold inline border-b-4 text-gray-300 border-gray-300'>Objective</p>
            </div>
            <div className=''>
                <p className='text-xl pt-4 pb-8'>The objective of this project was to develop a controller that could connect to various devices, 
                such as computers or microprocessors, and send commands to control different functions. 
                It was important to use existing parts and ensure compatibility with a wide range of devices.</p>
            </div>

            <div className='text-center '>
                <p className='text-2xl font-bold inline border-b-4 text-gray-300 border-gray-300'>Solution</p>
            </div>
            <div className=''>
                <p className='text-xl pt-4 pb-8'>The approach I devised involved utilizing tactile buttons and a joystick from my electronics collection. 
                These components were wired to an Arduino microcontroller, which was programmed to emulate the functionality of an Xbox or PlayStation controller when connected to any compatible device. 
                The entire setup was enclosed within a 3D-printed housing. Using the controller is straightforward—simply plug a USB cord into both the controller and the endpoint device, such as a computer or microprocessor. 
                The signals are then effortlessly decoded by the end device, allowing for seamless input functionality.</p>
            </div>

            <div className='text-center pb-4'>
                <p className='text-2xl font-bold inline border-b-4 text-gray-300 border-gray-300'>Components Overview</p>
            </div>
            <div style={{width: '90%', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} className=''>
                <img src={ComponentCallout} alt="Components"/>
            </div>
            <div className=''>
                <p className='text-2xl pt-4'>Components</p>
            </div>
            <div className='pb-8'>
                <p className='text-xl pt-4'>The device consists of four primary components: a 3-axis joystick, three tactile buttons, an Arduino microcontroller, and the PLA enclosure. 
                These components were carefully soldered together using color-coded wires, with pull-down resistors attached to the buttons to minimize noise.
                The Arduino was programmed using the Arduino IDE and the USB cable was salvaged from an older device.
                </p>
            </div>

            <div className=''>
                <p className='text-2xl pt-4'>The Code</p>
            </div>
            <div className='pb-8'>
                <p className='text-xl pt-4'>The code was written in C++ and was designed to emulate the functionality of a standard game controller.
                The code was uploaded to the Arduino microcontroller using the Arduino IDE and utalized the Joystick library.
                </p>
            </div>
            <div className='pb-8 overflow-hidden rounded-md'>
                <SyntaxHighlighter language="cpp" style={atomOneDark}>
                    {codeString}
                </SyntaxHighlighter>
            </div>
            <div className='pb-24'></div>
        </div>
    </div>
  )
}

export default JoystickPage