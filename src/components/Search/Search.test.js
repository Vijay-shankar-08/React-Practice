import { render , fireEvent } from '@testing-library/react'

import Search from './Search';

it('searchRenderCheck', () => {
   const {queryByTitle} = render(<Search />);
   const input = queryByTitle("dummyInput");
   expect(input).toBeTruthy();
});


describe("changeInput", () => {
    it("onCchange", () => {
        const { queryByTitle } = render(<Search />);
        const input = queryByTitle("dummyInput");
        fireEvent.change(input, { target: { value: "testValue"}});
        expect(input.value).toBe("testValue")
    });
});