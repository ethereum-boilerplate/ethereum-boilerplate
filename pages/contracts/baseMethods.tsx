import React from 'react';
import { Card } from '@web3uikit/core';
import { FormControl, FormLabel, Input, Button, Heading, useToast } from '@chakra-ui/react';
import { Formik } from 'formik';
import axios from 'axios';
import { chainId } from 'wagmi';

const BaseMethods = ({ address, displayedContractFunctions, responses }) => {
  const _params = {};

  const toast = useToast();

  const openNotification = (Title: string, Des: string, stat: string) =>
    toast({
      title: Title,
      description: Des,
      status: stat,
      duration: 9000,
      isclosable: true,
    });

  return displayedContractFunctions.map((item, key) => (
    <Formik
      initialValues={_params}
      onSubmit={() => {
        let isView = false;
        console.log(_params);

        for (const method of responses?.abi) {
          if (method.name !== item.name) {
            continue;
          }
          if (method.stateMutability === 'view') {
            isView = true;
          }
        }

        if (!isView) {
          
          console.log(chainId)
          openNotification('Txn gone', "response.data", 'info');
          // Txn function logic here
          
        } else {
          
          const options = {
            method: 'POST',
            url: `https://deep-index.moralis.io/api/v2/${address}/function`,
            params: { chain: 'goerli', function_name: item.name },
            headers: {
              accept: 'application/json',
              'content-type': 'application/json',
              'X-API-Key': 'test',
            },
            data: {
              abi: responses?.abi,
              params: _params,
            },
          };
          axios
            .request(options)
            .then((response) => {
              console.log(response.data);
              openNotification('View only function', response.data, 'warning');
            })
            .catch((error) => {
              console.error(error);
            });
        }
      }}
    >
      {(props) => (
        <form style={{ marginBottom: '25px' }}>
          <Card title={`${key + 1}. ${item?.name}`} key={key}>
            <FormControl
              onChange={(event) => {
                _params[event.target.id] = event.target.value;
              }}
              isRequired
              id={`${item.name}`}
            >
              <Heading as="h2" size="xl" style={{ marginBottom: '15px', marginTop: '10px' }}>
                {item.name}
              </Heading>
              {item.inputs.map((input, i) => (
                <>
                  <FormLabel style={{ marginBottom: '15px', marginTop: '8px' }} key={i}>
                    {input.name}
                  </FormLabel>
                  <Input placeholder={`${input.name}`} type="Outline" id={`${input.name}`} />
                </>
              ))}

              {/* <FormLabel style={{ display: 'block' }}>
              {responses[item.name]?.result && `Response: ${JSON.stringify(responses[item.name]?.result)}`}
            </FormLabel> */}
              <Button
                onClick={() => props.handleSubmit()}
                //type="submit"
                //isLoading={props.isSubmitting}
                colorScheme="teal"
                variant="outline"
                name={item.name}
                style={{ marginTop: '15px' }}
              >
                {item.stateMutability === 'view' ? 'Read🔎' : 'Transact💸'}
              </Button>
            </FormControl>
          </Card>
        </form>
      )}
    </Formik>
  ));
};

export default BaseMethods;
