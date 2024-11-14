import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Form from './form';

describe('Form Component', () => {
  const mockOnSubmit = jest.fn();

  beforeEach(() => {
    render(<Form onSubmit={mockOnSubmit} />);
  });

  test('renders the form with all fields', () => {
    expect(screen.getByTestId('name-input')).toBeInTheDocument();
    expect(screen.getByTestId('email-input')).toBeInTheDocument();
    expect(screen.getByTestId('message-input')).toBeInTheDocument();
    expect(screen.getByTestId('submit-button')).toBeInTheDocument();
  });

  test('displays name when user enters it', () => {
    const nameInput = screen.getByTestId('name-input');
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    expect(nameInput.value).toBe('John Doe');
  });

  test('displays email when user enters it', () => {
    const emailInput = screen.getByTestId('email-input');
    fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
    expect(emailInput.value).toBe('johndoe@example.com');
  });

  test('displays message when user enters it', () => {
    const messageInput = screen.getByTestId('message-input');
    fireEvent.change(messageInput, { target: { value: 'Hello, this is a test message!' } });
    expect(messageInput.value).toBe('Hello, this is a test message!');
  });

  test('calls onSubmit with correct data when form is submitted', () => {
    const nameInput = screen.getByTestId('name-input');
    const emailInput = screen.getByTestId('email-input');
    const messageInput = screen.getByTestId('message-input');
    const submitButton = screen.getByTestId('submit-button');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello!' } });
    fireEvent.click(submitButton);

    expect(mockOnSubmit).toHaveBeenCalledWith({
      name: 'John Doe',
      email: 'johndoe@example.com',
      message: 'Hello!',
    });
  });

  test('clears form fields after successful submission', () => {
    const nameInput = screen.getByTestId('name-input');
    const emailInput = screen.getByTestId('email-input');
    const messageInput = screen.getByTestId('message-input');
    const submitButton = screen.getByTestId('submit-button');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello!' } });
    fireEvent.click(submitButton);

    expect(nameInput.value).toBe('');
    expect(emailInput.value).toBe('');
    expect(messageInput.value).toBe('');
  });

  test('does not submit the form if any field is empty', () => {
    const nameInput = screen.getByTestId('name-input');
    const emailInput = screen.getByTestId('email-input');
    const submitButton = screen.getByTestId('submit-button');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: '' } }); // Leave email empty
    fireEvent.click(submitButton);

    expect(mockOnSubmit).not.toHaveBeenCalled();
  });
});

