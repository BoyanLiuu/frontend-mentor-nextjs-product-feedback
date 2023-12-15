import clsx from 'clsx';
import { createContext, useContext, useEffect, useRef, ReactNode } from 'react';

type DropdownContextType = {
  isOpen: boolean;
  setOpen: (status: boolean) => void;
};

type DropdownBaseProps = {
  children: ReactNode;
  className?: string;
};

type DropdownItemProps = DropdownBaseProps & { onClick: () => void };

// dropdown context for open state
const DropdownContext = createContext<DropdownContextType>({
  isOpen: false,
  setOpen: () => {}
});

// dropdown component for wrapping and providing context
export const Dropdown: React.FC<
  DropdownBaseProps & {
    setOpen: (status: boolean) => void;
    isOpen: boolean;
  }
> = ({ children, setOpen, isOpen }) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // click listeners for closing dropdown
  useEffect(() => {
    // close dropdown if click outside
    function close({ target }: MouseEvent) {
      if (!dropdownRef.current?.contains(target as Node)) {
        setOpen(false);
      }
    }
    // add or remove event listener
    if (isOpen) {
      window.addEventListener('click', close);
    }
    // cleanup
    return function removeListener() {
      window.removeEventListener('click', close);
    };
  }, [isOpen, setOpen]);

  return (
    <DropdownContext.Provider value={{ isOpen, setOpen }}>
      <div ref={dropdownRef} className='relative'>
        <div>{children}</div>
      </div>
    </DropdownContext.Provider>
  );
};

// dropdown button for triggering open

export const DropdownButton: React.FC<DropdownBaseProps> = ({ children }) => {
  const { isOpen, setOpen } = useContext(DropdownContext); // get the context

  // to open and close the dropdown
  function toggleOpen() {
    setOpen(!isOpen);
  }

  return (
    <div onClick={toggleOpen} className='relative z-0'>
      {children}
    </div>
  );
};

export const DropdownItem: React.FC<DropdownItemProps> = ({ children, onClick }) => {
  const { setOpen } = useContext(DropdownContext); // get the context

  return (
    <div
      onClick={() => {
        onClick();
        setOpen(false);
      }}
    >
      {children}
    </div>
  );
};

// dropdown content for displaying dropdown

export const DropdownContent: React.FC<DropdownBaseProps> = ({ children, className }) => {
  const { isOpen } = useContext(DropdownContext); // get the context

  return (
    <div
      className={clsx(
        'absolute top-[4rem]  z-10 w-full min-w-[12rem] rounded-primary bg-white text-base font-normal text-grayish-blue shadow-dropdown',
        !isOpen && 'hidden',
        className && className
      )}
    >
      {children}
    </div>
  );
};
