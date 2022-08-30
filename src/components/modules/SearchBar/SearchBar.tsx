import { Input } from '@chakra-ui/react';
import router from 'next/router';
import React, { useEffect, useState, ChangeEvent } from 'react';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState<string>();

  // eslint-disable-next-line no-undef
  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const Text = e.target.value;
    setSearchInput(Text);
  };
  useEffect(() => {
    if (searchInput) {
      router.push(
        { pathname: router.pathname },
        { pathname: router.pathname, query: { q: searchInput } },
        { shallow: true },
      );
    }

    return () => {
      router.replace({ pathname: router.pathname }, { pathname: router.pathname }, { shallow: true });
    };
  }, [searchInput]);

  return <Input variant="filled" placeholder="Search.." width={380} type={'text'} onInput={inputHandler} />;
};

export default SearchBar;
