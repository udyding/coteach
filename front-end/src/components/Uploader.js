import { useState } from 'react';
import { Heading } from "@chakra-ui/react";


function Uploader() {
    return (
      <main>
        <Heading size='md'>Upload your notes</Heading>
        <form action="">
          <input type="file" accept="image/*" />
        </form>
      </main>
    );
}

export default Uploader