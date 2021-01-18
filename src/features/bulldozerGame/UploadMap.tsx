import {
  Button,
  ButtonProps,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import styles from "./UploadMap.styles";

export interface UploadMapProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  onChangeUploadMap?: (fileList: FileList | null) => void;
}

const UploadMap = (props: UploadMapProps): JSX.Element => {
  const { className, onChangeUploadMap, ...otherProps } = props;
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
        <Link href={`${process.env.PUBLIC_URL}/siteMap.txt`} download>
          <Button {...buttonProps}>Download default map</Button>
        </Link>
      </div>
    </div>
  );
};

export default UploadMap;
