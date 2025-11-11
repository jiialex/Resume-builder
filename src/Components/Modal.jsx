import React from 'react';
import '../styles/modal.css';

function Modal({
  children,
  isOpen,
  onClose,
  title,
  hideHeader,
  showActionBtn,
  actionBtnIcon = null,
  actionBtnText,
  onActionClick,
}) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" aria-modal="true" role="dialog" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {!hideHeader && (
          <div className="modal-header">
            <h2>{title}</h2>
            <button className="modal-close-btn" onClick={onClose} aria-label="Close">
              &times;
            </button>
          </div>
        )}

        <div className="modal-body">
          {children}
        </div>

        {showActionBtn && (
          <div className="modal-footer">
            <button className="modal-action-btn" onClick={onActionClick}>
              {actionBtnIcon && <span>{actionBtnIcon}</span>}
              {actionBtnText}
            </button>
          </div>
        )}

        <button className="modal-svg-close" onClick={onClose} aria-label="Close">
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1l12 12M13 1L1 13"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Modal;
