import React from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Button,
  Flex,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

function MobSearch({ isOpen, onClose, searchInput, handleSearchInputChange }) {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="sm">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Search</DrawerHeader>
        <DrawerBody>
          <Flex pt={30}>
            <div className="menu-searchBox">
              <BsSearch size={20} />
              <input
                type="search"
                className="menu-search-input"
                placeholder="Search our menu"
                value={searchInput}
                onChange={handleSearchInputChange}
              />
            </div>
            <Button onClick={onClose}>Submit</Button>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default MobSearch;
