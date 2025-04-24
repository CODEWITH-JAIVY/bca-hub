"use client";

import React from 'react';
import Chapter1_IntroAndOSIModel from '@/subjects/Semester6/ComputerNetworks/Chapter1_IntroAndOSIModel';
import Chapter2_DataTransmissionAndEthernet from '@/subjects/Semester6/ComputerNetworks/Chapter2_DataTransmissionAndEthernet';
import Chapter3_RoutingAndIPNetworking from '@/subjects/Semester6/ComputerNetworks/Chapter3_RoutingAndIPNetworking';
import Chapter4_WirelessAndSecurity from '@/subjects/Semester6/ComputerNetworks/Chapter4_WirelessAndSecurity';
import Chapter5_TCPAndUDPProtocols from '@/subjects/Semester6/ComputerNetworks/Chapter5_TCPAndUDPProtocols';

const ComputerNetworksPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-4">Computer Networks</h1>
      <Chapter1_IntroAndOSIModel/>
      <Chapter2_DataTransmissionAndEthernet/>
      <Chapter3_RoutingAndIPNetworking/>
      <Chapter4_WirelessAndSecurity/>
      <Chapter5_TCPAndUDPProtocols/>
    </div>
  );
};

export default ComputerNetworksPage;
