import { useCallback, useEffect, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import * as Lock from '../../src/contracts/Lock.sol/Lock.json';

export default function BaseResolver({ contract, setContract }) {
  useEffect(() => {
    if (window === undefined) {
      console.log('window not found');
    } else {
      if (Lock?.contractName) {
        setContract(Lock);
      } else if (window.localStorage.getItem('contract')) {
        setContract(JSON.parse(window.localStorage.getItem('contract')!));
      } else {
        console.log('No contract found. Upload it manually or deploy the contract again');
      }
    }
  }, [Lock]);

  const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '50px',
    borderWidth: 3,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out',
  };

  const focusedStyle = {
    borderColor: '#2196f3',
  };

  const acceptStyle = {
    borderColor: '#00e676',
  };

  const rejectStyle = {
    borderColor: '#ff1744',
  };

  const onDrop = useCallback(
    (acceptedFiles: File) => {
      async function fileToJSON(givenFile: File) {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();

          fileReader.onload = (event) => {
            resolve(JSON.parse(String(event.target?.result)));
          };
          fileReader.onerror = (error) => reject(error);
          fileReader.readAsText(givenFile);
        });
      }
      fileToJSON(acceptedFiles).then((resolvedContract) => {
        if (window !== undefined) {
          window.localStorage.setItem('contract', JSON.stringify(resolvedContract));
          setContract(resolvedContract);
        }
      });
    },
    [contract],
  );

  const props = useMemo(() => {
    return {
      accept: {
        JSON: ['.json'],
      },
      maxFiles: 1,
      validator: onDrop,
      multiple: false,
      files: contract?.contractName ? [{ name: `${contract?.contractName}.json`, contract }] : [],
    };
  }, []);

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone(props);

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject],
  );

  return (
    <>
      <div className="container">
        <div {...getRootProps({ style })}>
          <input type="file" accept=".json" {...getInputProps()} />
          <p>Drag 'n' drop some abis here (supports hardhat abis), or click to select files</p>
        </div>
      </div>
    </>
  );
}
