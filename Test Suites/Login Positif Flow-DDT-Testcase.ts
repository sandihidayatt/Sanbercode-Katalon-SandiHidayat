<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>Login Positif Flow-DDT-Testcase</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>0</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>false</rerunImmediately>
   <testSuiteGuid>893b3b52-bef8-4d10-a3ff-80a056f8859a</testSuiteGuid>
   <testCaseLink>
      <guid>03cf554e-b5e4-49a8-b8e5-a85563f660e1</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <iterationNameVariable>
         <defaultValue>'sandihidayat175'</defaultValue>
         <description></description>
         <id>e05a6524-4286-41cd-a5d9-6c29dffe7730</id>
         <masked>false</masked>
         <name>GlobalUsername</name>
      </iterationNameVariable>
      <testCaseId>Test Cases/TC_Manual/TC_Login/TC_Success Login</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>e087877a-74a5-4a42-9a6d-483b7a1cf381</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/DataSanbercode/LoginData-Excel</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>e087877a-74a5-4a42-9a6d-483b7a1cf381</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>username</value>
         <variableId>e05a6524-4286-41cd-a5d9-6c29dffe7730</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>e087877a-74a5-4a42-9a6d-483b7a1cf381</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>password</value>
         <variableId>db86bfd1-edd8-4e85-8fcd-807d55319565</variableId>
      </variableLink>
   </testCaseLink>
</TestSuiteEntity>
