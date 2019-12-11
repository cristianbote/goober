jest.mock('react', () => ({ createElement: jest.fn().mockReturnValue('vnode') }), {
    virtual: true
});
