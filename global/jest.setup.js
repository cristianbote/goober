jest.mock('goober', () => ({ css: jest.fn().mockReturnValue('css') }), {
    virtual: true
});
