import { Button, ButtonProps, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import styles from "./WelcomePage.styles";

export interface WelcomePageProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  onClickDefaultMap?: () => void;
  onChangeUploadMap?: (fileList: FileList | null) => void;
}

const WelcomePage = (props: WelcomePageProps): JSX.Element => {
  const {
    className,
    onClickDefaultMap,
    onChangeUploadMap,
    ...otherProps
  } = props;
  const classes = makeStyles(styles)();
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChangeUploadMap?.(e.target.files);
  const buttonProps: ButtonProps = {
    variant: "contained",
    color: "primary",
    disableElevation: true,
    className: classes.button,
  };
  return (
    <div className={clsx(classes.root, className)} {...otherProps}>
      <Typography className={classes.title} variant="h4" align="center">
        Site Clearing Simulation
      </Typography>
      <Typography variant="h6" align="center">
        Please upload a site map to begin the simulation
      </Typography>
      <div className={classes.buttonsRow}>
        <input
          type="file"
          accept=".txt"
          hidden
          id="upload-site-map"
          onChange={handleFileChange}
        />
        <label htmlFor="upload-site-map">
          <Button {...buttonProps} component="span">
            Upload site map
          </Button>
        </label>
        {onClickDefaultMap && (
          <Button {...buttonProps} onClick={onClickDefaultMap}>
            Use default map
          </Button>
        )}
      </div>
    </div>
  );
};

export default WelcomePage;
